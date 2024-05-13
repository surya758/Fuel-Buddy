import { Pressable, StyleSheet, Switch, View } from "react-native";
import React from "react";
import useFuelPrices from "@hooks/useFuelPrices";
import { useTheme } from "@context/ThemeContext";
import { Header } from "@components";
import { TITLE } from "@utils/constants";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};

const Calculate = (props: Props) => {
	const { fuelPrices, isLoading, error } = useFuelPrices("maharashtra", "mumbai");
	const { theme, setTheme } = useTheme();

	const shareIcon = (
		<Pressable onPress={() => {}}>
			<Icon name='share-outline' size={30} color={theme.colors.secondary} />
		</Pressable>
	);

	const switchComponent = (
		<Switch
			value={theme.statusbar === "light"}
			trackColor={{ false: theme.colors.secondary, true: theme.colors.secondary }}
			ios_backgroundColor={theme.colors.tertiary}
			onValueChange={setTheme}
		/>
	);

	return (
		<View>
			<Header title={TITLE} components={[switchComponent, shareIcon]} />
		</View>
	);
};

export default Calculate;

const styles = StyleSheet.create({});
