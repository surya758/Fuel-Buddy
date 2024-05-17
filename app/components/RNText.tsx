import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { useTheme } from "@context/ThemeContext";
import { theme } from "@utils/types";

type Props = PropsWithChildren<{}>;

const RNText = ({ children }: Props) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme);
	return <Text style={styles.text}>{children}</Text>;
};

export default RNText;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		text: {
			color: theme.colors.secondary,
			fontFamily: theme.typography.subHeader.fontFamily,
			fontSize: theme.typography.subHeader.fontSize,
		},
	});
