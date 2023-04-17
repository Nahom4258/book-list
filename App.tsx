/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-get-random-values";
import React from "react";
import {
  Button,
  useColorScheme,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { bookContext } from "./app/realm";
import { BooksList } from "./app/views/BooksList";
import { AddBook } from "./app/views/AddBook";
import { ViewBook } from "./app/views/ViewBook";
const { RealmProvider } = bookContext;

const Stack = createNativeStackNavigator();

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Books List">
        <Stack.Screen
          name="Books List"
          component={BooksList}
          options={({ route, navigation }) => ({
            headerRight: () => {
              return (
                <Button
                  onPress={() => navigation.navigate("Add Book")}
                  title="Add Book"
                />
              );
            }
          })}
        />
        <Stack.Screen name="Add Book" component={AddBook} />
        <Stack.Screen name="View Book" component={ViewBook} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const AppWrapper = () => {
  return (
    <RealmProvider>
      <App />
    </RealmProvider>
  );
};

export default AppWrapper;
