import { User } from "@firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import update from "react-addons-update";
import { useHistory } from "react-router";
import { AuthInterface } from "../../service/auth_service";
import { DataInterface } from "../../service/database";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item, { ItemType } from "../item/item";
import stylse from "./main.module.css";

export type ItemState = ItemType[];

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
  const [items, setItem] = useState<ItemState>([]);
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

  // useEffect(() => {
  //   if (!userId) {
  //     return;
  //   }
  //   dataService.readData(userId, (items: ItemState) => {
  //     setItem(items);
  //   });
  // }, [userId, dataService]);

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
      const updated = [...items];
      updated.push(item);
      return updated;
    });
    setOnDialog(false);
    setType("");
    // dataService.writeData(userId, item);
  };

  const onDeleteItem = (item: ItemType) => {
    setItem((items) => {
      const updated = [...items];
      const indexItem = updated.indexOf(item);
      updated.splice(indexItem, 1);
      return updated;
    });
    // dataService.deleteData(userId, item.id);
  };

  const moveItem = (dragIndex: number, hoberIndex: number) => {
    const updated: ItemState = [...items];
    const dragCard = items[dragIndex];

    setItem(
      update(items, {
        $splice: [
          [dragIndex, 1], // Delete
          [hoberIndex, 0, dragCard], // Add
        ],
      })
    );
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
          <Item items={items} onDeleteItem={onDeleteItem} moveItem={moveItem} />
        </section>
        <footer className={stylse.footer}>
          <p>JK Motion</p>
        </footer>
      </div>
    </>
  );
};

export default Main;
