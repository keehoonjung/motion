import { User } from "@firebase/auth";
import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { Dispatch } from "redux";
import { AuthInterface } from "../../service/auth_service";
import { DataInterface } from "../../service/database";
import {
  dataInitalState,
  readData,
  updateData,
  updateUserId,
} from "../../store";
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
  data: InitData;
  dispatch: Dispatch;
};

interface HistoryStateId {
  id: string;
}

const Main = ({
  FileInput,
  dataService,
  authService,
  data,
  dispatch,
}: MainProps) => {
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
    dispatch(readData());
  }, [userId, dataService, dispatch]);

  useEffect(() => {
    authService.onAuthChange((user: User | null) => {
      if (user) {
        setUserId(user.uid);
        dispatch(updateUserId(user.uid));
      } else {
        history.push("/");
      }
    });
  }, [authService, userId, history, dispatch]);

  const onSubmitItem = useCallback(() => {
    setOnDialog(false);
    setType("");
  }, []);

  const onAddTodoItem = useCallback(
    (item: ItemType, todo: string) => {
      const itemUpdated = { ...initData.items };
      const newItem = { ...item };
      newItem.todolist
        ? newItem.todolist.push(todo)
        : (newItem.todolist = [todo]);
      itemUpdated[item.id] = newItem;

      const newData = {
        ...initData,
        items: itemUpdated,
      };

      setInitData(newData);
      dataService.writeData(userId, newData);
    },
    [initData, dataService, userId]
  );

  const onDeleteTodoItem = useCallback(
    (item: ItemType, index: number) => {
      const itemUpdated = { ...initData.items };
      const newItem = { ...item };
      newItem.todolist.splice(index, 1);
      itemUpdated[item.id] = newItem;

      const newData = {
        ...initData,
        items: itemUpdated,
      };

      setInitData(newData);
      dataService.writeData(userId, newData);
    },
    [initData, dataService, userId]
  );

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

      const column = data.columns[source.droppableId];
      const newItemIds = Array.from(column.itemIds);
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      dispatch(updateData(newItemIds));
    },
    [data, dispatch]
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
        <DragDropContext onDragEnd={onDragEnd}>
          <section className={stylse.item_container}>
            <Item
              onAddTodoItem={onAddTodoItem}
              onDeleteTodoItem={onDeleteTodoItem}
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

function mapStateToProps(state: dataInitalState) {
  return {
    data: state.data,
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
