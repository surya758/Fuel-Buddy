import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode, ReactElement } from "react";
import Constants from "expo-constants";
import { useTheme } from "@context/ThemeContext";

type Props = {
	title: string;
	components?: Array<ReactNode | ReactElement>;
};

const Header = ({ title, components }: Props) => {
	const { theme, setTheme } = useTheme();
	const styles = styleHandler(theme);

	const renderComponents = () => {
		if (Object.keys(components).length > 1) {
			return (
				<View style={styles.renderComponentContainer}>
					{components.map((component, index) => {
						return (
							<View key={index} style={styles.componentStyle}>
								{component}
							</View>
						);
					})}
				</View>
			);
		}
		return <View>{components}</View>;
	};

	return (
		<View>
			<StatusBar style={theme.statusbar === "light" ? "dark" : "light"} />
			<View style={{ height: Constants.statusBarHeight, backgroundColor: theme.colors.primary }} />
			<View style={styles.lowerContainer}>
				<Text style={styles.titleText}>{title}</Text>
				{components && renderComponents()}
			</View>
		</View>
	);
};

export default Header;

const styleHandler = (theme) =>
	StyleSheet.create({
		lowerContainer: {
			backgroundColor: theme.colors.primary,
			justifyContent: "space-between",
			marginVertical: 10,
			flexDirection: "row",
			alignItems: "center",
		},
		titleText: {
			color: theme.colors.secondary,
			fontSize: theme.typography.header.fontSize,
			fontFamily: theme.typography.header.fontFamily,
		},
		renderComponentContainer: {
			flexDirection: "row",
			alignItems: "center",
		},
		componentStyle: { paddingHorizontal: 3 },
	});
