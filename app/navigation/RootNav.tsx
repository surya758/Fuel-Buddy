import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Main from "@screens/Main";

type Props = {};

const RootNav = (props: Props) => {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Main />
		</View>
	);
};

export default RootNav;

const styles = StyleSheet.create({});
