import { StyleSheet, View, useWindowDimensions } from "react-native";
import React from "react";
import { theme } from "@utils/types";
import { useTheme } from "@context/ThemeContext";
import { RNInput, RNText } from "@components";

type Props = {
	data: number | string;
	caption: string;
};

const InfoField = ({ data, caption }: Props) => {
	const windowWidth = useWindowDimensions().width;
	const { theme } = useTheme();
	const styles = styleHandler(theme, windowWidth);
	return (
		<View style={styles.container}>
			<RNText style={styles.dataText}>{data}</RNText>
			<RNText style={styles.captionText} numberOfLines={2}>
				{caption}
			</RNText>
		</View>
	);
};

export default InfoField;

const styleHandler = (theme: theme, windowWidth: number) =>
	StyleSheet.create({
		container: {
			width: windowWidth / 1.5,
			alignItems: "center",
			justifyContent: "center",
			marginVertical: 20,
		},
		dataText: {
			fontSize: theme.typography.result.fontSize,
			textAlign: "center",
		},
		captionText: {
			textAlign: "center",
		},
	});
