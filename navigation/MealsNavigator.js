import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import Colors from "../constants/Colors";

const MealsNavigator = createStackNavigator(
  {
    //shortcut version:
    Categories: {
      screen: CategoriesScreen
    },
    //longer version:
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    //can set an inital route specifically instead of the defaul using the first item in the stack list above:
    //initialRouteName: 'MealDetail' (just an example intial route other than the first one listed)
    initialRouteName: "Categories",
    //will change screen change style to modal on iOS, if you set mode:modal
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
    }
  }
);

export default createAppContainer(MealsNavigator);
