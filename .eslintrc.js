module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		"plugin:vue/vue3-essential",
		"eslint:recommended",
		"@vue/typescript/recommended",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"prettier/prettier": [
			"error",
			{
				// 設定可能なオプションの一部. () はデフォルト値.
				printWidth: 100, // 行の最大長 (80)
				tabWidth: 4, // 1 インデントあたりの空白数 (2)
				useTabs: true, // インデントにタブを使用する (false)
			},
		],
	},
};
