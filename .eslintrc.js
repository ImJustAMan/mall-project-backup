module.exports = {
	parser: 'vue-eslint-parser',
	env: {
		node: true,
		es6: true,
		browser: true
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/prettier"
	],
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
	}
};
