module.exports = function (api) {
	api.cache(true);
	return {
		presets: ["babel-preset-expo"],
		plugins: [
			["module:react-native-dotenv"],
			[
				"module-resolver",
				{
					alias: {
						"@screens/*": ["./app/screens/*"],
						"@screens": ["./app/screens"],
						"@navigation/*": ["./app/navigation/*"],
						"@themes": ["./app/themes"],
						"@context/*": ["./app/context/*"],
						"@api/*": ["./app/api/*"],
						"@services/*": ["./app/services/*"],
						"@hooks/*": ["./app/hooks/*"],
						"@components": ["./app/components"],
						"@helper/*": ["./app/helper/*"],
						"@utils/*": ["./app/utils/*"],
						"@assets/*": ["./app/assets/*"],
					},
				},
			],
		],
	};
};
