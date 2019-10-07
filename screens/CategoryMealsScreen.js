import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text>The Category Meal Screen!</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
