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
  updateOrder(userId: string, items: ItemState): void;
  readData(userId: string, onUpdateItem: (items: ItemState) => void): any;
  deleteData(userId: string, id: string | number): void;
}

export class DataSerivce implements DataInterface {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    this.database = getDatabase(fibaseApp);
  }

  writeData(userId: string, item: ItemType) {
    set(ref(this.database, `${userId}/items/${item.id}`), item);
  }

  updateOrder(userId: string, items: ItemState) {
    set(ref(this.database, `${userId}/items`), items);
    console.log("hello");
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
