import React from "react";

import { View, Text, FlatList, Pressable } from "react-native";
import { Book } from "../realm";
import Realm from "realm";

export const BookItem = ({
  book,
  navigation,
}: {
  book: Book & Realm.Object;
  navigation: any;
}) => {
  const navigateToDetails = () => {
    navigation.navigate('View Book', {
      book: book
    })
  };

  return (
    <Pressable
      style={{
        margin: 5,
        padding: 20,
        borderColor: "#7f00ff",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 10,
      }}
      onPress={navigateToDetails}
    >
      <Text style={{ fontSize: 24, fontWeight: "bold", color: "black" }}>
        {book.title}
      </Text>
      <Text style={{ fontSize: 18, marginVertical: 5 }}>{book.author}</Text>
    </Pressable>
  );
};
