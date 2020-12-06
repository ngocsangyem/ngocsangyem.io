const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const minimist = require('minimist');
const postcss = require('gulp-postcss');
const c = require('ansi-colors');
const beeper = require('beeper');
const cssnano = require('cssnano');
const del = require('del');
const webpackstream = require('webpack-stream');
const stripCssComments = require('gulp-strip-css-comments');

const cssDeclarationSorter = require('css-declaration-sorter');
const autoprefixer = require('autoprefixer');
const Fiber = require('fibers');
const gcmq = require('gulp-group-css-media-queries');
const TerserPlugin = require('terser-webpack-plugin');
('./node_modules/bootstrap/scss/bootstrap.scss');
const args = minimist(process.argv.slice(2));
const deploy = require('gulp-gh-pages');
const postCssPlugins = [
	autoprefixer({
		grid: true,
	}),
	cssDeclarationSorter({
		order: 'concentric-css',
	}),
	cssnano({ rebase: false }),
];

const webpackConfig = {
	mode: !args.production ? 'development' : 'production',
	output: {
		filename: 'app.js',
	},
	devtool: !args.production ? 'source-map' : false,
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: 'all',
		},
		minimize: !args.production ? false : true,
	},
	plugins: [],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};

if (args.production) {
	webpackConfig.plugins.push(
		new TerserPlugin({
			cache: true,
			parallel: true,
			extractComments: 'all',
		})
	);
}

// Error handle
const reportError = function (error) {
	// [log]
	//console.log(error);

	// Format and ouput the whole error object
	//console.log(error.toString());

	// ----------------------------------------------
	// Pretty error reporting

	var report = '\n';
	var chalk = c.white.bgRed;

	if (error.plugin) {
		report += chalk('PLUGIN:') + ' [' + error.plugin + ']\n';
	}

	if (error.message) {
		report += chalk('ERROR: ') + ' ' + error.message + '\n';
	}

	console.error(report);

	// ----------------------------------------------
	// Notification

	if (error.line && error.column) {
		var notifyMessage = 'LINE ' + error.line + ':' + error.column + ' -- ';
	} else {
		var notifyMessage = '';
	}

	$.notify({
		title: 'FAIL: ' + error.plugin,
		message: `${notifyMessage}${error.message}`,
		sound: 'Frog', // See: https://github.com/mikaelbr/node-notifier#all-notification-options-with-their-defaults
	}).write(error);

	beeper.beep(); // System beep (backup)

	// ----------------------------------------------
	// Prevent the 'watch' task from stopping

	this.emit('end');
};

function clean() {
	return del([
		'./assets/css/**/*.css',
		'!./assets/css/plugins/**/*.css',
		'./assets/js/**/*.js',
		'!./assets/js/plugins/**/*.js',
		'./assets/images/**.*',
	]);
}

function styles() {
	return gulp
		.src('./_assets/app.scss')
		.pipe(
			$.plumber({
				errorHandler: reportError,
			})
		)
		.pipe(
			$.if(
				!args.production,
				$.sourcemaps.init({
					loadMaps: true,
				})
			)
		)

		.pipe(
			$.sass({
				fiber: Fiber,
				outputStyle: 'expanded',
				precision: 10,
			})
		)
		.pipe($.if(args.production, stripCssComments()))
		.pipe($.if(args.production, gcmq()))
		.pipe($.if(args.production, $.postcss(postCssPlugins)))
		.pipe($.if(!args.production, $.sourcemaps.write('./')))
		.pipe(gulp.dest('./assets/css/'));
}

function scripts() {
	return gulp
		.src('./_assets/app.js')
		.pipe(webpackstream(webpackConfig))
		.pipe(gulp.dest('./assets/js/'));
}
function html() {
	return gulp
		.src('./_site/**/*.html')
		.pipe($.htmlmin({ collapseWhitespace: true }))
		.pipe(gulp.dest('./_site/'));
}

function images() {
	return gulp
		.src('./_assets/images/**/*.{jpg,jpeg,gif,svg,png}')
		.pipe($.if(args.production, $.imagemin()))
		.pipe(gulp.dest('./assets/images'));
}

function deployPage() {
	return gulp.src('./_site/**/*').pipe(deploy());
}

function watch(done) {
	gulp.watch('./_assets/**/*.scss', styles);
	gulp.watch('./_assets/**/*.js', scripts);
	gulp.watch('./_assets/images/**/*.{jpg,jpeg,gif,svg,png}', images);

	done();
}

function purgeCSS() {
	return gulp
		.src('./assets/css/app.css')
		.pipe(
			$.purgecss({
				content: ['./_site/index.html'],
			})
		)
		.pipe(gulp.dest('build/css'));
}

const build = gulp.series(styles, scripts, images, watch);
gulp.task('build', build);

exports.default = gulp.series(clean, build);
exports.build = gulp.series(styles, scripts, images);
exports.styles = styles;
exports.scripts = scripts;
exports.clean = clean;
exports.deployPage = deployPage;
exports.purgeCSS = purgeCSS;
