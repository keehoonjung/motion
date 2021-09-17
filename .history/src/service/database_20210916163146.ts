import { ItemType } from "./../component/item/item";
import { FirebaseApp } from "firebase/app";
import { Database, getDatabase, set, ref } from "firebase/database";

interface DataInterface {
  writeData(userId: string, item: ItemType): void;
}

export class DataSerivce {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    this.database = getDatabase(fibaseApp);
  }

  writeData(userId: string, item: ItemType) {
    set(ref(this.database, `${userId}/items/${item.id}`), item);
  }
}