import { FirebaseApp } from "firebase/app";
import { Database, getDatabase, set, ref } from "firebase/database";

class DataSerivce {
  database: Database;
  constructor(fibaseApp: FirebaseApp) {
    const database = getDatabase(fibaseApp);
  }

  writeData(userId, item) {
    set(ref(this.database, `${userId}/items/${item.id}`));
  }
}
