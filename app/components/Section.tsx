import { Pressable, StyleSheet, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { useTheme } from "@context/ThemeContext";
import { theme } from "@utils/types";

type SectionProps = PropsWithChildren<{
	style?: ViewStyle;
	error?: boolean;
	pressable?: boolean;
	onPress?: () => void;
}>;

const Section = ({ children, style, error, pressable, onPress }: SectionProps) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme, error);
	return pressable ? (
		<Pressable onPress={onPress} style={[styles.container, style]}>
			{children}
		</Pressable>
	) : (
		<View style={[styles.container, style]}>{children}</View>
	);
};

export default Section;

const styleHandler = (theme: theme, error: boolean) =>
	StyleSheet.create({
		container: {
			marginVertical: 10,
			padding: 10,
			borderWidth: error ? 1.5 : 1,
			borderRadius: 4,
			borderColor: error ? theme.colors.error : theme.colors.secondary,
		},
	});
