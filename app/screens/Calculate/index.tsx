import { Pressable, StyleSheet, Switch, View, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { useStateList, useFuelPrices, useCityList } from "@hooks/useFuelPrices";
import { useTheme } from "@context/ThemeContext";
import { Header, Section, RNText, Layout, RNInput, RNButton } from "@components";
import { TITLE } from "@utils/constants";
import { CalculateScreenNavigationProp, theme } from "@utils/types";
import { Ionicons, FontAwesome, MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useLocation } from "@context/LocationContext";

const CalculateScreen = () => {
	const navigation = useNavigation<CalculateScreenNavigationProp>();
	const { theme, setTheme } = useTheme();
	const { state, city } = useLocation();
	const [distance, setDistance] = useState("25");
	const [fuelEfficiency, setFuelEfficiency] = useState("25");
	const [isDistanceNull, setIsDistanceNull] = useState(false);
	const [isFuelEfficiencyNull, setIsFuelEfficiencyNull] = useState(false);
	const { data: stateList } = useStateList();
	const { data: cityList } = useCityList(state);
	const {
		data: fuelData,
		isLoading: isFuelDataLoading,
		error,
		refetch: refetchFuelData,
	} = useFuelPrices(state, city);

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

	const formatValue = (value: string, setInput: (value: string) => void) => {
		// if value is empty, set input to 0
		if (value === "") {
			setInput("0");
			return;
		}

		// Remove any non-numeric and non-dot characters
		const cleanedValue = value.replace(/[^0-9.]/g, "");

		// Count the number of dots in the cleaned value
		const dotCount = cleanedValue.split(".").length - 1;

		// If there are more than one dot, replace with the last occurrence
		let formattedValue =
			dotCount > 1 ? cleanedValue.slice(0, cleanedValue.lastIndexOf(".")) : cleanedValue;

		// If number is like "01", "03", etc. remove the leading zero
		formattedValue =
			formattedValue.length > 1 && !formattedValue.includes(".") && formattedValue.startsWith("0")
				? formattedValue.slice(1)
				: formattedValue;

		// Update the input state with the formatted value
		setInput(formattedValue);
	};

	const calculatePrice = () => {
		if (isFuelDataLoading) return;
		!parseFloat(distance) ? setIsDistanceNull(true) : setIsDistanceNull(false);
		!parseFloat(fuelEfficiency) ? setIsFuelEfficiencyNull(true) : setIsFuelEfficiencyNull(false);
		if (!parseFloat(distance) || !parseFloat(fuelEfficiency)) return;

		const fuelPrice = fuelData.fuel.diesel.retailPrice;
		const distanceCovered = parseFloat(distance);
		const fuelEfficiencyInt = parseFloat(fuelEfficiency);

		const fuelConsumed = distanceCovered / fuelEfficiencyInt;
		const totalCost = fuelConsumed * fuelPrice;

		navigation.navigate("Result", {
			distanceCovered,
			fuelEfficiency: fuelEfficiencyInt,
			fuelConsumed,
			totalCost,
		});
	};

	const handleStateSelection = () => {
		navigation.navigate("Selection", {
			screen: "state",
			data: stateList.states,
		});
	};
	const handleCitySelection = () => {
		navigation.navigate("Selection", {
			screen: "city",
			data: cityList.cities,
		});
	};

	if (isFuelDataLoading) {
		return (
			<Layout style={styles.loadingLayoutContainer}>
				<ActivityIndicator size='large' color={theme.colors.secondary} />
			</Layout>
		);
	}

	return (
		<Layout>
			<Header title={TITLE.FUEL_CALCULATOR} components={[switchComponent, shareIcon]} />

			<ScrollView showsVerticalScrollIndicator={false} style={styles.mainContainer}>
				<Section pressable onPress={handleStateSelection}>
					<View style={styles.stateCityContainer}>
						<RNText style={styles.sectionHeaderText}>State</RNText>
						<RNText>{state}</RNText>
					</View>
				</Section>
				<Section pressable onPress={handleCitySelection}>
					<View style={styles.stateCityContainer}>
						<RNText style={styles.sectionHeaderText}>City</RNText>
						<RNText>{city}</RNText>
					</View>
				</Section>
				<Section>
					<RNText style={styles.sectionHeaderText}>{TITLE.FUEL_PRICE}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<FontAwesome name='rupee' size={30} color={theme.colors.secondary} />
						</View>
						<RNText style={styles.numberText}>{fuelData?.fuel?.diesel?.retailPrice}</RNText>
					</View>
				</Section>
				<Section error={isDistanceNull}>
					<RNText style={styles.sectionHeaderText}>{TITLE.DISTANCE_COVERED}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons
								name='map-marker-distance'
								size={30}
								color={theme.colors.secondary}
							/>
						</View>
						<RNInput value={distance} onChangeText={(text) => formatValue(text, setDistance)} />
					</View>
				</Section>
				<Section error={isFuelEfficiencyNull}>
					<RNText style={styles.sectionHeaderText}>{TITLE.FUEL_EFFICIENCY}</RNText>
					<View style={styles.measureContainer}>
						<View style={styles.iconContainer}>
							<MaterialCommunityIcons name='fuel' size={30} color={theme.colors.secondary} />
						</View>
						<RNInput
							value={fuelEfficiency}
							onChangeText={(text) => formatValue(text, setFuelEfficiency)}
						/>
					</View>
				</Section>
				<RNButton title='Calculate' onPress={calculatePrice} />
			</ScrollView>
		</Layout>
	);
};

export default CalculateScreen;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		mainContainer: {
			paddingHorizontal: 10,
			marginTop: 10,
		},
		titleText: {},
		stateCityContainer: {
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
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
		loadingLayoutContainer: { justifyContent: "center", alignItems: "center" },
	});
