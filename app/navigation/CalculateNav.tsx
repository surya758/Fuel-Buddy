import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalculateScreen, SelectionScreen } from "@screens";
import { CalculateStackParamList } from "@utils/types";

const CalculateStack = createNativeStackNavigator<CalculateStackParamList>();

const CalculateNav = () => {
	return (
		<CalculateStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<CalculateStack.Screen name='Calculate' component={CalculateScreen} />
			<CalculateStack.Screen name='Selection' component={SelectionScreen} />
		</CalculateStack.Navigator>
	);
};

export default CalculateNav;
