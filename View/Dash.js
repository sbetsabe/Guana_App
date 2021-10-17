import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import Menu from "../Menu/Menu";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "../stores/rootReducer";

const Stack = createStackNavigator();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

const App = () => {
  return (
    <Provider store={store}>
      {/*<NavigationContainer>*/}
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Menu"
            component={Menu}
          />
        </Stack.Navigator>
      {/*</NavigationContainer>*/}
    </Provider>
  )
}

export default App;