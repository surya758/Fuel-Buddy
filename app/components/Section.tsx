import { StyleSheet, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { useTheme } from "@context/ThemeContext";
import { theme } from "@utils/types";

type SectionProps = PropsWithChildren<{
	style?: ViewStyle;
}>;

const Section = ({ children, style }: SectionProps) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme);
	return <View style={[styles.container, style]}>{children}</View>;
};

export default Section;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		container: {
			marginVertical: 10,
			padding: 10,
			borderWidth: 1,
			borderRadius: 4,
			borderColor: theme.colors.secondary,
		},
	});
