import React from "react";
import { TextInput, TextInputProps, StyleSheet, TextStyle } from "react-native";
import { theme } from "@utils/types";
import { useTheme } from "@context/ThemeContext";

type RNInputProps = TextInputProps & {
	style?: TextStyle;
};

const RNInput = ({ style, ...rest }: RNInputProps) => {
	const { theme } = useTheme();
	const styles = styleHandler(theme);

	return (
		<TextInput
			style={[styles.inputText, style]}
			autoCapitalize='none'
			autoCorrect={false}
			autoComplete='off'
			inputMode='decimal'
			returnKeyType='done'
			{...rest}
		/>
	);
};

export default RNInput;

const styleHandler = (theme: theme) =>
	StyleSheet.create({
		inputText: {
			flex: 1,
			marginLeft: 10,
			color: theme.colors.secondary,
			fontFamily: theme.typography.number.fontFamily,
			fontSize: theme.typography.number.fontSize,
		},
	});
