/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import "react-native-get-random-values";
import React from "react";
import type { PropsWithChildren } from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Colors } from "react-native/Libraries/NewAppScreen";

import { bookContext } from "./app/realm";
import { BooksList } from "./app/views/BooksList";
import { AddBook } from "./app/views/AddBook";
const { RealmProvider } = bookContext;

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <SafeAreaView style={backgroundStyle}>
    //   <StatusBar
    //     barStyle={isDarkMode ? "light-content" : "dark-content"}
    //     backgroundColor={backgroundStyle.backgroundColor}
    //   />
    //   <BooksList />
    // </SafeAreaView>
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

type RootStackParamList = {
};
