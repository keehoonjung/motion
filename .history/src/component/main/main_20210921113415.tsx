import { User } from "@firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AuthInterface } from "../../service/auth_service";
import { DataInterface } from "../../service/database";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item, { ItemType } from "../item/item";
import stylse from "./main.module.css";

export type ItemState = ItemType[];

type MainProps = {
  FileInput: (props: any) => JSX.Element;
  authService: AuthInterface;
  dataService: DataInterface;
};

interface HistoryStateId {
  id: string;
}

const Main = ({ FileInput, dataService, authService }: MainProps) => {
  const history = useHistory<HistoryStateId>();
  const historyState = history?.location?.state;
  const [userId, setUserId] = useState(historyState && historyState.id);
  const [items, setItem] = useState<ItemState>([]);
  const [onDialog, setOnDialog] = useState(false);
  const [type, setType] = useState("");

  const setOnCilck = useCallback((type: string) => {
    setOnDialog(true);
    setType(type);
  }, []);
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

  const onSubmitItem = useCallback(
    (item: ItemType) => {
      const updated = items ? [...items] : [];
      updated.push(item);

      setItem(updated);
      setOnDialog(false);
      setType("");
      dataService.writeData(userId, updated);
    },
    [items, dataService, userId]
  );

  const onDeleteItem = useCallback(
    (item: ItemType) => {
      const updated = [...items];
      const deleteIndex = items.indexOf(item);
      updated.splice(deleteIndex, 1);
      setItem(updated);
      dataService.deleteData(userId, deleteIndex);
      dataService.writeData(userId, updated);
    },
    [items, dataService, userId]
  );

  const moveItem = useCallback(
    (dragIndex: number, hoberIndex: number) => {
      const dragCard = items[dragIndex];

      setItem((items: ItemState) => {
        const updated = [...items];
        updated.splice(dragIndex, 1);
        updated.splice(hoberIndex, 0, dragCard);
        dataService.writeData(userId, updated);
        return updated;
      });
    },
    [items, dataService, userId]
  );

  return (
    <>
      {onDialog && (
        <div className={stylse.background}>
          <Dialog
            FileInput={FileInput}
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
