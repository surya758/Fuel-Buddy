import { FlatList, Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import {
	SelectionScreenNavigationProp,
	SelectionScreenRouteProp,
	cityObjectType,
	stateObjectType,
	theme,
} from "@utils/types";
import { Header, Layout, RNText } from "@components";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useTheme } from "@context/ThemeContext";
import { Ionicons } from "react-native-vector-icons";
import { useLocation } from "@context/LocationContext";

const SelectionScreen = () => {
	const route = useRoute<SelectionScreenRouteProp>();
	const { state, city, setState, setCity } = useLocation();

	const navigation = useNavigation<SelectionScreenNavigationProp>();
	const { theme } = useTheme();

	const styles = handleStyle(theme);

	const headerTitle = route.params.screen === "state" ? "Select State" : "Select City";

	const CrossIconComponent = (
		<Pressable
			onPress={() => {
				navigation.navigate("Calculate");
			}}
			hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
		>
			<Ionicons name='close' size={30} color={theme.colors.secondary} />
		</Pressable>
	);

	return (
		<Layout>
			<Header title={headerTitle} components={[CrossIconComponent]} left />
			{route.params.screen === "state" ? (
				<FlatList
					style={styles.flatlist}
					data={route.params.data as stateObjectType[]}
					keyExtractor={(item) => item.stateId}
					renderItem={({ item }) => {
						return (
							<Pressable
								key={item.stateId}
								style={styles.container}
								onPress={() => setState(item.stateId)}
							>
								<RNText style={styles.textStyle}>{item.stateName}</RNText>
								{state == item.stateId && (
									<Ionicons name='checkmark' size={20} color={theme.colors.secondary} />
								)}
							</Pressable>
						);
					}}
				/>
			) : (
				<FlatList
					style={styles.flatlist}
					data={route.params.data as cityObjectType[]}
					keyExtractor={(item) => item.cityId}
					renderItem={({ item }) => {
						return (
							<Pressable
								key={item.cityId}
								style={styles.container}
								onPress={() => setCity(item.cityId)}
							>
								<RNText style={styles.textStyle}>{item.cityName}</RNText>
								{city == item.cityId && (
									<Ionicons name='checkmark' size={20} color={theme.colors.secondary} />
								)}
							</Pressable>
						);
					}}
				/>
			)}
		</Layout>
	);
};

export default SelectionScreen;

const handleStyle = (theme: theme) =>
	StyleSheet.create({
		flatlist: {
			marginBottom: 30,
		},
		container: {
			marginHorizontal: 10,
			paddingTop: 20,
			paddingBottom: 10,
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.tertiary,
			flexDirection: "row",
			justifyContent: "space-between",
			alignItems: "center",
		},
		textStyle: {},
	});
