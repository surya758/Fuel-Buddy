import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SelectionScreenNavigationProp } from "@utils/types";
import { Header, Layout } from "@components";

const SelectionScreen = () => {
	return (
		<Layout>
			<Header title='Select State' />
			<ScrollView showsVerticalScrollIndicator={false}>
				{/* <FlatList 
					data={}
					keyExtractor={}
					renderItem={}
				/> */}
			</ScrollView>
		</Layout>
	);
};

export default SelectionScreen;

const styles = StyleSheet.create({});
