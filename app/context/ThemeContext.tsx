import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance, ColorSchemeName } from "react-native";
import { lightTheme, darkTheme } from "@themes";

interface ThemeContextProps {
	theme: typeof lightTheme | typeof darkTheme;
	setTheme: (theme: typeof lightTheme | typeof darkTheme) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: lightTheme,
	setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState(lightTheme);

	useEffect(() => {
		const colorScheme = Appearance.getColorScheme() as ColorSchemeName;
		setTheme(colorScheme === "dark" ? darkTheme : lightTheme);
	}, []);

	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider, useTheme };
