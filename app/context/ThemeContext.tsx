import React, { createContext, useState, useEffect, useContext } from "react";
import { Appearance } from "react-native";
import { lightTheme, darkTheme } from "@themes";
import { storeData, getData } from "@helper/storage";
interface ThemeContextProps {
	theme: typeof lightTheme | typeof darkTheme;
	setTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
	theme: darkTheme,
	setTheme: () => {},
});

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState(darkTheme);

	useEffect(() => {
		const loadStoredTheme = async () => {
			const storedTheme = await getData("theme");
			if (storedTheme) {
				setTheme(storedTheme === "dark" ? darkTheme : lightTheme);
			} else {
				const deviceTheme = Appearance.getColorScheme();
				setTheme(deviceTheme === "dark" ? darkTheme : lightTheme);
			}
		};
		loadStoredTheme();
	}, []);

	const toggleTheme = () => {
		setTheme(theme === lightTheme ? darkTheme : lightTheme);
		storeData("theme", theme === lightTheme ? "dark" : "light");
	};

	return (
		<ThemeContext.Provider value={{ theme, setTheme: toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
