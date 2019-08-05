import React from "react";
import { createStackNavigator } from "react-navigation";

import AuthScreen from "../screens/AuthScreen";

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
});

AuthStack.navigationOptions = {
  headerMode: "none",
  navigationOptions: {
    headerVisible: false,
  },
};

export default AuthStack;
