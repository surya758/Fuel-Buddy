import "react-native-gesture-handler";
import RootNav from "@navigation/RootNav";
import { ThemeProvider } from "@context/ThemeContext";
import { useFonts } from "expo-font";

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		"Montserrat-Black": require("./app/assets/fonts/Montserrat-Black.ttf"),
		"Montserrat-Bold": require("./app/assets/fonts/Montserrat-Bold.ttf"),
		"Montserrat-Regular": require("./app/assets/fonts/Montserrat-Regular.ttf"),
		"Lato-Regular": require("./app/assets/fonts/Lato-Regular.ttf"),
		"Lato-Black": require("./app/assets/fonts/Lato-Black.ttf"),
	});

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return (
		<ThemeProvider>
			<RootNav />
		</ThemeProvider>
	);
}
