// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	css: {
		loaderOptions: {
			sass: {
				sassOptions: {
					includePaths: [
						path.resolve(__dirname, 'src/assets/scss')
					],
					indentedSyntax: false,
				},
				prependData: `
					@import "src/assets/scss/_variables.scss"; 
					@import "src/assets/scss/_mixins.scss";
				`,
			},
		},
	}
};
