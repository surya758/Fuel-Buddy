import { StyleSheet, View, ViewStyle } from "react-native";
import React, { PropsWithChildren } from "react";
import { useTheme } from "@context/ThemeContext";
import { theme } from "@utils/types";

type Props = PropsWithChildren<{
	style?: ViewStyle;
}>;

const Layout = ({ children, style }: Props) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme);
	return <View style={[styles.container, style]}>{children}</View>;
};

export default Layout;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: theme.colors.primary,
			paddingHorizontal: 10,
		},
	});
