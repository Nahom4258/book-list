import React from "react";

import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { Book, bookContext } from "../realm";
const { useRealm } = bookContext;

export const ViewBook = ({
  navigation,
  route,
}: {
  book: Book & Realm.Object;
  navigation: any;
  route: any;
}) => {
  const realm = useRealm();

  const { book } = route.params;

  const deleteCurrentBook = () => {
    Alert.alert(
      `Delete book?`,
      `Are you sure you want to delete the book from your database?`,
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            realm.write(() => {
              realm.delete(book);
            });
            navigation.reset({
              index: 0,
              routes: [{ name: "Books List" }],
            });
          },
        },
      ]
    );
  };
  // console.log('this is params: ', route.params)
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <Text style={styles.text}>{book.title}</Text>
      <Text style={styles.label}>Author</Text>
      <Text style={styles.text}>{book.author}</Text>
      <Text style={styles.label}>Series</Text>
      <Text style={styles.text}>{book.series}</Text>
      <Text style={styles.label}>Volume</Text>
      <Text style={styles.text}>{book.volume}</Text>
      <Text style={styles.label}>Pages</Text>
      <Text style={styles.text}>{book.pages}</Text>

      <View style={styles.addButton}>
        <Button color="red" onPress={deleteCurrentBook} title="Delete Book" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginTop: 15,
  },
  text: {
    margin: 10,
    padding: 13,
    borderRadius: 9,
    fontSize: 23,
    color: "black",
  },
  addButton: {
    margin: 15,
  },
  label: {
    fontSize: 17,
  },
});
