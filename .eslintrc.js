module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true
	},
	extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks'],
	parser: '@babel/eslint-parser',
	plugins: ['react', 'prettier', 'jsx-a11y'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				'eslint-disable-next-line': 'off',
				trailingComma: 'none'
			}
		],
		'no-unused-vars': 'warn',
		'no-trailing-spaces': 'warn',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		'react/state-in-constructor': 'off',
		'import/no-extraneous-dependencies': ['off', { devDependencies: true }],
		indent: ['warn', 'tab'],
		'react/jsx-indent': ['warn', 'tab'],
		'react/jsx-indent-props': ['warn', 'tab'],
		'no-tabs': ['warn', { allowIndentationTabs: true }],
		'object-curly-spacing': 1,
		'no-console': 'off',
		'comma-dangle': ['warn', 'never'],
		'linebreak-style': [
			'error',
			process.platform === 'win32' ? 'windows' : 'unix'
		] // https://stackoverflow.com/q/39114446/2771889
	},
	settings: {
		react: {
			version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
		}
	}
};
