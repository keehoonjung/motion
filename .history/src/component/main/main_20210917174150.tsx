import { User } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AuthInterface } from "../../service/auth_service";
import { DataInterface } from "../../service/database";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item, { ItemType } from "../item/item";
import stylse from "./main.module.css";

export type ItemState = {
  [key: string | number]: ItemType;
};

export type ItemArrayState = ItemType[] | null;

type MainProps = {
  authService: AuthInterface;
  dataService: DataInterface;
};

interface HistoryStateId {
  id: string;
}

const Main = ({ dataService, authService }: MainProps) => {
  const history = useHistory<HistoryStateId>();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [items, setItem] = useState<ItemState>({});
  const [itemsArray, setItemsArray] = useState<ItemArrayState>(null);
  const [onDialog, setOnDialog] = useState(false);
  const [type, setType] = useState("");

  const setOnCilck = (type: string) => {
    setOnDialog(true);
    setType(type);
  };
  const setExitCiick = () => {
    setOnDialog(false);
    setType("");
  };

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    dataService.readData(userId, (items: ItemState) => {
      setItem(items);
    });
  }, [userId, dataService]);

  useEffect(() => {
    authService.onAuthChange((user: User | null) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history]);

  const onSubmitItem = (item: ItemType) => {
    setItem((items) => {
      const updated = { ...items };
      updated[item.id] = item;
      return updated;
    });
    setOnDialog(false);
    setType("");
    dataService.writeData(userId, item);
  };

  const onDeleteItem = (item: ItemType) => {
    setItem((items) => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
    dataService.deleteData(userId, item.id);
  };

  return (
    <>
      {onDialog && (
        <div className={stylse.background}>
          <Dialog
            type={type}
            onSubmitItem={onSubmitItem}
            setExitCiick={setExitCiick}
          />
        </div>
      )}
      <div className={stylse.container}>
        <Header setOnCilck={setOnCilck} onLogout={onLogout} />
        <section className={stylse.item_container}>
          <Item items={items} onDeleteItem={onDeleteItem} />
        </section>
        <footer className={stylse.footer}>
          <p>JK Motion</p>
        </footer>
      </div>
    </>
  );
};

export default Main;
