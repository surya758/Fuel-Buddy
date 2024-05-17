import { Pressable, StyleSheet, Switch, View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import useFuelPrices from "@hooks/useFuelPrices";
import { useTheme } from "@context/ThemeContext";
import { Header, Section, RNText, Layout, RNInput, RNButton } from "@components";
import { TITLE } from "@utils/constants";
import { theme } from "@utils/types";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";

type Props = {};

const Calculate = (props: Props) => {
	const { fuelPrices, isLoading, error } = useFuelPrices("maharashtra", "mumbai");
	const { theme, setTheme } = useTheme();
	const [distance, setDistance] = useState("0");
	const [fuelEfficiency, setFuelEfficiency] = useState("0");

	const styles = styleHandler(theme);

	// WIP: implement share functionality
	const shareIcon = (
		<Pressable onPress={() => {}}>
			<Ionicons name='share-outline' size={30} color={theme.colors.secondary} />
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

	const calculatePrice = () => {
		const fuelPrice = fuelPrices?.fuel?.diesel?.retailPrice;
		const distanceCovered = parseFloat(distance);
		const fuelEfficiencyInt = parseFloat(fuelEfficiency);

		const fuelConsumed = distanceCovered / fuelEfficiencyInt;
		const totalCost = fuelConsumed * fuelPrice;

		alert(`Total cost of fuel: ₹${totalCost}`);
	};

	return (
		<Layout>
			<Header title={TITLE.FUEL_CALCULATOR} components={[switchComponent, shareIcon]} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Section>
					<RNText style={styles.sectionHeaderText}>{TITLE.FUEL_PRICE}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome name='rupee' size={30} color={theme.colors.secondary} />
						</View>
						<RNText style={styles.numberText}>{fuelPrices?.fuel?.diesel?.retailPrice}</RNText>
					</View>
				</Section>

				<Section>
					<RNText style={styles.sectionHeaderText}>{TITLE.DISTANCE_COVERED}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								name='map-marker-distance'
								size={30}
								color={theme.colors.secondary}
							/>
						</View>
						<RNInput value={distance} onChangeText={setDistance} />
					</View>
				</Section>

				<Section>
					<RNText style={styles.sectionHeaderText}>{TITLE.FUEL_EFFICIENCY}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name='fuel' size={30} color={theme.colors.secondary} />
						</View>
						<RNInput value={fuelEfficiency} onChangeText={setFuelEfficiency} />
					</View>
				</Section>

				<RNButton title='Calculate' onPress={calculatePrice} />
			</ScrollView>
		</Layout>
	);
};

export default Calculate;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		titleText: {},
		sectionHeaderText: {
			color: theme.colors.lightGrey,
			fontFamily: theme.typography.subHeader.fontFamily,
		},
		measureContainer: { flexDirection: "row", alignItems: "baseline" },
		iconContainer: { width: 30, alignItems: "center" },
		numberText: {
			marginLeft: 10,
			fontSize: theme.typography.number.fontSize,
			fontFamily: theme.typography.number.fontFamily,
		},
	});
