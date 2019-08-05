import React from "react";
import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
// import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

import TabBarIcon from "../components/TabBarIcon";
import CheckoutScreen from "../screens/CheckoutScreen";
import CartScreen from "../screens/CartScreen";
import ProductScreen from "../screens/ProductScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductInformationScreen from "../screens/ProductInformationScreen";
import ThankForOrderScreen from "../screens/ThankForOrderScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Product: ProductScreen,
  ProductInformation: ProductInformationScreen,
});

HomeStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: ({ navigation }) => {
    const { routeName } = navigation.state;
    if (routeName === "SuccessReviewScreen") {
      return false;
    }
    if (routeName === "WriteReview") {
      return false;
    }
  },
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    navigation.navigate("Home");
    defaultHandler();
  },
  tabBarLabel: "Home",
  tabBarIcon: ({ focused, tintColor }) => (
    <TabBarIcon
      focused={focused}
      tintColor="#000"
      name={Platform.OS === "ios" ? `ios-home${focused ? "" : ""}` : "md-home"}
    />
  ),
  tabBarOptions: {
    activeTintColor: "#F05829",
    inactiveTintColor: "#000",
    labelStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 10,
    },
    style: {
      height: 60,
      paddingVertical: 7,
      borderTopWidth: 0.5,
      borderTopColor: "#bbb",
    },
  },
});

const CartStack = createStackNavigator({
  Cart: CartScreen,
  Checkout: CheckoutScreen,
  ThankForOrder: ThankForOrderScreen,
});

CartStack.navigationOptions = ({ navigation }) => ({
  tabBarOnPress: ({ navigation, defaultHandler }) => {
    navigation.navigate("Cart");
    defaultHandler();
  },
  tabBarVisible: !(navigation.state.index > 0),
  tabBarLabel: "Cart",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-cart" : "md-cart"} />
  ),
  tabBarOptions: {
    activeTintColor: "#F05829",
    inactiveTintColor: "#000",
    labelStyle: {
      fontFamily: "work-sans-semibold",
      fontSize: 10,
    },
    style: {
      height: 60,
      paddingVertical: 7,
      borderTopWidth: 0.5,
      borderTopColor: "#bbbbbb",
    },
  },
});

export default createBottomTabNavigator({
  Home: HomeStack,
  Cart: CartStack,
});
