import { Pressable, StyleSheet, Switch, View, Text } from "react-native";
import React from "react";
import useFuelPrices from "@hooks/useFuelPrices";
import { useTheme } from "@context/ThemeContext";
import { Header, Section, RNText, Layout } from "@components";
import { TITLE } from "@utils/constants";
import { theme } from "@utils/types";
import Icon from "react-native-vector-icons/Ionicons";

type Props = {};

const Calculate = (props: Props) => {
	const { fuelPrices, isLoading, error } = useFuelPrices("maharashtra", "mumbai");
	const { theme, setTheme } = useTheme();
	const styles = styleHandler(theme);

	// WIP: implement share functionality
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
		<Layout>
			<Header title={TITLE} components={[switchComponent, shareIcon]} />
			<Section>
				<RNText>hisdsd</RNText>
			</Section>
		</Layout>
	);
};

export default Calculate;

const styleHandler = (theme: theme) => StyleSheet.create({});
