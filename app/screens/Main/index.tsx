import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useFuelPrices from "@hooks/useFuelPrices";

type Props = {};

const Main = (props: Props) => {
	const { fuelPrices, isLoading, error } = useFuelPrices("maharashtra", "mumbai");

	return (
		<View>
			<Text>Main</Text>
		</View>
	);
};

export default Main;

const styles = StyleSheet.create({});
