import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Header, Layout, RNText } from "@components";
import { ResultScreenNavigationProp, ResultScreenRouteProp, theme } from "@utils/types";
import { useTheme } from "@context/ThemeContext";
import { Ionicons } from "react-native-vector-icons";
import InfoField from "./components/InfoField";
import { useNavigation, useRoute } from "@react-navigation/native";

type Props = {};

const ResultScreen = (props: Props) => {
	const { theme } = useTheme();
	const navigation = useNavigation<ResultScreenNavigationProp>();
	const route = useRoute<ResultScreenRouteProp>();
	const styles = styleHandler(theme);

	const { distanceCovered, totalCost, fuelConsumed, fuelEfficiency } = route.params;

	const BackIconComponent = (
		<Pressable
			onPress={() => {
				navigation.goBack();
			}}
		>
			<Ionicons name='arrow-back' size={30} color={theme.colors.secondary} />
		</Pressable>
	);
	return (
		<Layout>
			<Header title='Results' left components={[BackIconComponent]} />
			<View style={styles.container}>
				<InfoField data={distanceCovered} caption={"Distance covered (in Km)"} />
				<InfoField data={totalCost.toFixed(2)} caption={"Total cost of the trip (in ₹)"} />
				<InfoField data={fuelConsumed.toFixed(2)} caption={"Total fuel consumed (in L)"} />
				<InfoField
					data={`${(totalCost / distanceCovered).toFixed(2)}`}
					caption={"Cost per km (in ₹)"}
				/>
			</View>
		</Layout>
	);
};

export default ResultScreen;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "flex-start",
			alignItems: "center",
		},
	});
