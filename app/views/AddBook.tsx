import React, { useCallback, useState } from "react";

import { View, Text, Button, TextInput, StyleSheet } from "react-native";

import { bookContext, Book } from "../realm";

export const AddBook = ({ navigation }) => {
  const { useRealm } = bookContext;
  const realm = useRealm();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [series, setSeries] = useState<string>("");
  const [volume, setVolume] = useState<number>(0);
  const [pages, setPages] = useState<number>(0);

  const addToDatabase = useCallback(
    (
      newTitle: string,
      newAuthor: string,
      newSeries: string,
      newVolume: number,
      newPages: number
    ) => {
      realm.write(() => {
        realm.create("Book", {
          _id: new Realm.BSON.ObjectId(),
          title: newTitle,
          author: newAuthor,
          series: newSeries,
          volume: newVolume,
          pages: newPages,
          createdAt: new Date(),
        });
      });
      setTitle("");
      setAuthor("");
      setSeries("");
      setVolume(0);
      setPages(0);
      navigation.navigate("Books List");
      //   console.log("first", newTitle, newAuthor, newSeries, newVolume, newPages);
    },
    [realm]
  );

  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 40, fontWeight: "bold", color: "black", margin: 15 }}
      >
        Add New Book
      </Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.textInput}
        placeholder="Title"
      />
      <TextInput
        value={author}
        onChangeText={setAuthor}
        style={styles.textInput}
        placeholder="Author"
      />
      <TextInput
        value={series}
        onChangeText={setSeries}
        style={styles.textInput}
        placeholder="Series"
      />
      <TextInput
        keyboardType="numeric"
        value={String(volume) == "NaN" ? "" : String(volume)}
        onChangeText={(myVol) =>
          setVolume(parseInt(myVol.replace(/[^0-9]/g, "")))
        }
        style={styles.textInput}
        placeholder="Volume"
        editable={series.length > 0 ? true : false}
      />
      <TextInput
        keyboardType="numeric"
        value={String(pages) == "NaN" ? "" : String(pages)}
        onChangeText={(myPages) =>
          setPages(parseInt(myPages.replace(/[^0-9]/g, "")))
        }
        style={styles.textInput}
        placeholder="Pages"
      />

      <View style={styles.addButton}>
        <Button
          onPress={() => addToDatabase(title, author, series, volume, pages)}
          title="Add to Database"
        />
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
  textInput: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 13,
    borderRadius: 9,
    fontSize: 17,
    minWidth: "90%",
  },
  addButton: {
    margin: 15,
  },
});
