import { Database, getDatabase, set, ref } from "firebase/database";

class DataSerivce {
  database: getDatabase;
  constructor(fibaseApp) {
    const database = getDatabase(fibaseApp);
  }

  writeData(userId, item) {
    set(ref(this.database, `${userId}/items/${item.id}`));
  }
}
