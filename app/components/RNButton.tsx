import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "@utils/types";
import { useTheme } from "@context/ThemeContext";
import RNText from "./RNText";

type Props = {
	title: string;
	onPress: () => void;
};

const RNButton = ({ title, onPress }: Props) => {
	const { theme } = useTheme();

	const styles = styleHandler(theme);
	return (
		<Pressable style={styles.button} onPress={onPress}>
			<RNText style={styles.text}>{title}</RNText>
		</Pressable>
	);
};

export default RNButton;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		button: {
			backgroundColor: theme.colors.secondary,
			padding: 10,
			borderRadius: 5,
			marginTop: 10,
			alignItems: "center",
		},
		text: {
			color: theme.colors.primary,
		},
	});
