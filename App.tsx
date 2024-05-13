import RootNav from "@navigation/RootNav";
import { ThemeProvider } from "@context/ThemeContext";
import "react-native-gesture-handler";

export default function App() {
	return (
		<ThemeProvider>
			<RootNav />
		</ThemeProvider>
	);
}
