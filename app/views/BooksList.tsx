import React, { useCallback, useState } from "react";
import { View, Text, FlatList, TextInput, Pressable } from "react-native";

import { bookContext, Book } from "../realm";
import { BookItem } from "./BookItem";
import { Realm } from "@realm/react";
const { useQuery, useRealm } = bookContext;

export const BooksList = () => {
  const books = useQuery(Book);
  const realm = useRealm();

  const [newBookTitle, setNewBookTitle] = useState<string>("");

  // const addNewBook = useCallback((newBook: string) => {
  //   realm.write(() => {
  //     realm.create("Book", {
  //       _id: new Realm.BSON.ObjectId(),
  //       title: newBook,
  //       createdAt: new Date(),
  //     });
  //   });
  //   setNewBookTitle("");
  // }, [realm]);

  return (
    <View style={{ padding: 10, paddingTop: 25 }}>
      {/* <View style={{ flexDirection: "row" }}>
        <TextInput
          style={{
            flexGrow: 1,
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 5,
            padding: 10,
            marginBottom: 10,
          }}
          placeholder="Add Book"
          onChangeText={setNewBookTitle}
          value={newBookTitle}
        />
        <Pressable onPress={() => addNewBook(newBookTitle)}>
          <Text
            style={{
              margin: 5,
              paddingHorizontal: 15,
              fontSize: 19,
              fontWeight: "bold",
            }}
          >
            Add
          </Text>
        </Pressable>
      </View> */}
      <FlatList
        data={books}
        renderItem={({ item }) => <BookItem book={item} />}
      />
    </View>
  );
};
