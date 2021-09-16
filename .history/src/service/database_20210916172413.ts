import { ItemState } from "./../../.history/src/component/main/main_20210916171409";
import { ItemType } from "./../component/item/item";
import { FirebaseApp } from "firebase/app";
import {
  Database,
  getDatabase,
  set,
  ref,
  onValue,
  remove,
} from "firebase/database";

export interface DataInterface {
  writeData(userId: string, item: ItemType): void;
  readData(userId: string, onUpdateItem: (items: ItemState) => void): any;
}

export class DataSerivce implements DataInterface {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    this.database = getDatabase(fibaseApp);
  }

  writeData(userId: string, item: ItemType) {
    set(ref(this.database, `${userId}/items/${item.id}`), item);
  }

  readData(userId: string, onUpdateItem: (items: ItemState) => void) {
    const readItems = ref(this.database, `${userId}/items`);
    onValue(readItems, (snapshot) => {
      const data = snapshot.val();
      onUpdateItem(data);
    });
  }

  deleteData(userId: string, id: string | number) {
    remove(ref(this.database, `${userId}/items/${id}`));
  }
}
