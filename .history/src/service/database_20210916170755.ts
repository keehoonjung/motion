import { ItemType } from "./../component/item/item";
import { FirebaseApp } from "firebase/app";
import { Database, getDatabase, set, ref, onValue } from "firebase/database";

export interface DataInterface {
  writeData(userId: string, item: ItemType): void;
  readData(userId: string, onUpdateItem: (userId: string) => void): void;
}

export class DataSerivce implements DataInterface {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    this.database = getDatabase(fibaseApp);
  }

  writeData(userId: string, item: ItemType) {
    set(ref(this.database, `${userId}/items/${item.id}`), item);
  }

  readData(userId: string, onUpdateItem: (userId: string) => void) {
    const readItems = ref(this.database, `${userId}/items`);
    onValue(readItems, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
    });
  }
}
