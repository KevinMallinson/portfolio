// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/portfolio/'
		: '/',
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
					includePaths: [
						path.resolve(__dirname, 'src/assets/scss')
					],
					indentedSyntax: false,
				},
				prependData: '@import "src/assets/scss/_variables.scss";'
			},
		},
	}
};
