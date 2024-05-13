import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Calculate, Result } from "@screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

type Props = {};

const RootNav = (props: Props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Calculate' component={Calculate} />
				<Stack.Screen name='Result' component={Result} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNav;

const styles = StyleSheet.create({});
