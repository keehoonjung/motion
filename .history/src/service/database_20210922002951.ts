import { ColumnType, InitData } from "./../component/main/main";
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
  writeData(userId: string, item: InitData): void;
  updateOrder(userId: string, items: InitData, id: string | number): void;
  readData(userId: string, onUpdateItem: (items: InitData) => void): any;
  deleteData(userId: string, id: string | number): void;
  updateColumn(userId: string, column: ColumnType): void;
}

export class DataSerivce implements DataInterface {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    this.database = getDatabase(fibaseApp);
  }

  writeData(userId: string, data: InitData) {
    set(ref(this.database, `${userId}`), data);
  }

  updateOrder(userId: string, items: InitData, id: string | number) {
    set(ref(this.database, `${userId}/items`), items);
    console.log("hello");
  }

  readData(userId: string, onUpdateItem: (items: InitData) => void) {
    const readItems = ref(this.database, `${userId}`);
    onValue(readItems, (snapshot) => {
      const data = snapshot.val();
      onUpdateItem(data);
    });
  }

  deleteData(userId: string, id: string | number) {
    remove(ref(this.database, `${userId}/items/${id}`));
  }

  updateColumn(userId: string, column: ColumnType) {
    set(ref(this.database, `${userId}/columns/column1/itemIds`), column);
  }
}
