import { User } from "@firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useHistory } from "react-router";
import { AuthInterface } from "../../service/auth_service";
import { DataInterface } from "../../service/database";
import Dialog from "../dialog/dialog";
import Header from "../header/header";
import Item, { ItemType } from "../item/item";
import stylse from "./main.module.css";

export type ColumnType = {
  id: string;
  itemIds: (string | number)[];
};

export type InitData = {
  items: { [itemId: string | number]: ItemType };
  columns: { [columnId: string | number]: ColumnType };
};

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
  const [initData, setInitData] = useState<InitData>({
    items: {},
    columns: {
      column1: {
        id: "column1",
        itemIds: [],
      },
    },
  });

  const [onDialog, setOnDialog] = useState(false);
  const [type, setType] = useState("");

  const setOnCilck = useCallback((type: string) => {
    setOnDialog(true);
    setType(type);
  }, []);

  const setExitCiick = useCallback(() => {
    setOnDialog(false);
    setType("");
  }, []);

  const onLogout = useCallback(() => {
    authService.logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    dataService.readData(userId, (data: InitData) => {
      setInitData(data);
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
      const itemUpdated = { ...initData.items, [`${item.id}`]: item };
      const column = initData.columns["column1"];
      const newItemIds = Array.from(column.itemIds);
      newItemIds.push(item.id);

      const newColumn: ColumnType = {
        ...column,
        itemIds: newItemIds,
      };

      const dataUpdated = {
        items: itemUpdated,
        columns: { ...initData.columns, [newColumn.id]: newColumn },
      };

      setInitData(dataUpdated);
      setOnDialog(false);
      setType("");
      dataService.writeData(userId, dataUpdated);
    },
    [initData, dataService, userId]
  );

  const onDeleteItem = useCallback(
    (item: ItemType, index: number) => {
      const itemUpdated = { ...initData.items };
      delete itemUpdated[item.id];
      const column = initData.columns["column1"];
      const columnItemIds = [...column.itemIds];
      columnItemIds.splice(index, 1);
      const newColumn: ColumnType = {
        ...column,
        itemIds: columnItemIds,
      };

      const dataUpdated = {
        items: itemUpdated,
        columns: { ...initData.columns, [newColumn.id]: newColumn },
      };

      setInitData(dataUpdated);

      dataService.deleteData(userId, item.id);
      dataService.updateColumn(userId, columnItemIds);
    },
    [initData, dataService, userId]
  );

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = initData.columns[source.droppableId];
    const newItemIds = Array.from(column.itemIds);
    newItemIds.splice(source.index, 1);
    newItemIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      itemIds: newItemIds,
    };

    const newData = {
      ...initData,
      columns: {
        ...initData.columns,
        [newColumn.id]: newColumn,
      },
    };

    setInitData(newData);
  };

  const setColumn = initData
    ? initData.columns["column1"]
    : { id: "column1", itemIds: [] };

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
        <DragDropContext onDragEnd={onDragEnd}>
          <section className={stylse.item_container}>
            <Item
              items={initData.items}
              column={setColumn}
              onDeleteItem={onDeleteItem}
            />
          </section>
        </DragDropContext>
        <footer className={stylse.footer}>
          <p>JK Motion</p>
        </footer>
      </div>
    </>
  );
};

export default Main;
