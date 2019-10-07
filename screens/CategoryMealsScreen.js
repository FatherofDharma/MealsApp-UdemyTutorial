import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text>The Category Meal Screen!</Text>
      <Button
        title="Go to Details!"
        onPress={() => {
          props.navigation.navigate("MealDetail");
        }}
      />
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
