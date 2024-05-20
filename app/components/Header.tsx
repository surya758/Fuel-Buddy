import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { ReactNode, ReactElement } from "react";
import Constants from "expo-constants";
import { useTheme } from "@context/ThemeContext";
import { theme } from "@utils/types";

type HeaderProps = {
	title: string;
	components?: Array<ReactNode | ReactElement>;
	left?: boolean;
};

const Header = ({ title, components, left }: HeaderProps) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme, left);

	const renderComponents = () => {
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
	};

	return (
		<View style={styles.container}>
			<StatusBar style={theme.statusbar === "light" ? "dark" : "light"} />
			<View
				style={{
					height: Constants.statusBarHeight,
					backgroundColor: theme.colors.primary,
				}}
			/>
			{left ? (
				<View style={styles.lowerContainerLeft}>
					{components && renderComponents()}
					<Text style={styles.titleText}>{title}</Text>
				</View>
			) : (
				<View style={styles.lowerContainer}>
					<Text style={styles.titleText}>{title}</Text>
					{components && renderComponents()}
				</View>
			)}
		</View>
	);
};

export default Header;

const styleHandler = (theme: theme, left: boolean) =>
	StyleSheet.create({
		container: {
			paddingHorizontal: 10,
			borderBottomWidth: 1,
			borderBottomColor: theme.colors.secondary,
		},
		lowerContainer: {
			backgroundColor: theme.colors.primary,
			justifyContent: "space-between",
			marginVertical: 10,
			flexDirection: "row",
			alignItems: "center",
		},
		lowerContainerLeft: {
			backgroundColor: theme.colors.primary,
			// justifyContent: "space-between",
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
		componentStyle: { marginLeft: left ? 0 : 8, marginRight: left ? 8 : 0 },
	});
