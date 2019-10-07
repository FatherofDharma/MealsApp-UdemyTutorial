import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={Styles.screen}>
      <Text>The Categories Screen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
          //alternate and shorter way to write this with no functional difference:
          //props.navigation.navigate('CategoryMeals');
          //-------Other options to 'navigate'
          // props.navigation.push("CategoryMeals");
          //allows you to push to the same screen again, where as navigate will not let you
          // props.navigation.replace("CategoryMeals");
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

export default CategoriesScreen;
