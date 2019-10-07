import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FiltersScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text>The Filters Screen!</Text>
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

export default FiltersScreen;
