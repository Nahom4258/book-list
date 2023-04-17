import "react-native-get-random-values";
import { createRealmContext } from "@realm/react";
import Realm from "realm";

export class Book extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  author!: string;
  series!: string;
  volume!: number;
  pages!: number;
  createdAt!: Date;

  static schema = {
    name: "Book",
    properties: {
      _id: "objectId",
      title: "string",
      author: "string",
      series: "string",
      volume: "int",
      pages: "int",
      createdAt: "date",
    },
  };
}

export const bookContext = createRealmContext({
  schema: [Book],
  deleteRealmIfMigrationNeeded: true,
});
