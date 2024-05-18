import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ResultScreen } from "@screens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CalculateNav from "./CalculateNav";
import { RootStackParamList } from "@utils/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNav = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='CalculateNav' component={CalculateNav} />
				<Stack.Screen name='Result' component={ResultScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNav;

const styles = StyleSheet.create({});
