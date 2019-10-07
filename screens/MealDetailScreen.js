import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text>The Meal Detail Screen!</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
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

export default MealDetailScreen;
