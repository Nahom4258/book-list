import React from "react";

import { View, Text, FlatList } from "react-native";
import { Book } from "../realm";
import Realm from "realm";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export const BookItem = ({ book }: { book: Book & Realm.Object }) => {
  return (
    <View
      style={{
        margin: 5,
        padding: 20,
        borderColor: "#7f00ff",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
        {book.title}
      </Text>
      <Text style={{ fontSize: 18, marginVertical: 5 }}>{book.author}</Text>
    </View>
  );
};

// type Props = NativeStackScreenProps<RootStackParamList, 'Profile', 'MyStack'>;