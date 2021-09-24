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
      data && setInitData(data);
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
      const items = initData.items;
      const itemUpdated = { ...items, [`${item.id}`]: item };
      const column = initData.columns["column1"];
      const newItemIds = column.itemIds ? Array.from(column.itemIds) : [];
      newItemIds.push(item.id);

      const newColumn: ColumnType = {
        ...column,
        itemIds: newItemIds,
      };

      const newData = {
        items: itemUpdated,
        columns: { ...initData.columns, [newColumn.id]: newColumn },
      };

      setInitData(newData);
      setOnDialog(false);
      setType("");
      dataService.writeData(userId, newData);
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

      const newData = {
        items: itemUpdated,
        columns: { ...initData.columns, [newColumn.id]: newColumn },
      };

      setInitData(newData);

      dataService.deleteData(userId, item.id);
      dataService.updateColumn(userId, columnItemIds);
    },
    [initData, dataService, userId]
  );

  const onAddTodoItem = (item: ItemType, todo: string) => {
    const itemUpdated = { ...initData.items };
    const newItem = { ...item };
    newItem.todolist.push(todo);
    itemUpdated[item.id] = newItem;

    const newData = {
      ...initData,
      items: itemUpdated,
    };

    setInitData(newData);
    dataService.writeData(userId, newData);
  };

  const onDragEnd = useCallback(
    (result: DropResult) => {
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
      dataService.updateColumn(userId, newItemIds);
    },
    [initData, dataService, userId]
  );

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
              onAddTodoItem={onAddTodoItem}
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
