import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import { TodoItem } from "../typings/todo-item";

import { Type } from "./constant";

interface TodoInterface {
  allDone: boolean;
  todoList: TodoItem[];
  filter: (flag: Type) => void;
  addItem: (item: TodoItem) => void;
  deleteItemById: (id: string) => void;
  length: () => number;
  triggerItem: (id: string) => void;
  triggerAll: () => void;
}

const TodoContext = createContext<TodoInterface | undefined>(undefined);

TodoContext.displayName = "TodoContext";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [showState, setShowState] = useState<Type>(Type.ALL);
  const [allDone, setAllDown] = useState(false);

  const filterList: TodoItem[] = useMemo(() => {
    switch (showState) {
      case Type.ACTIVE:
        return todoList.filter((item) => item.complete === false);
      case Type.COMPLETED:
        return todoList.filter((item) => item.complete === true);
      default:
        return todoList;
    }
  }, [showState, todoList]);

  useEffect(() => {
    setAllDown(
      todoList.length !== 0 && todoList.every((item) => item.complete === true)
    );
  }, [todoList]);

  const addItem = (item: TodoItem) => {
    console.log("增加了", item);
    setTodoList([...todoList, item]);
  };

  const deleteItemById = (id: string) => {
    console.log("删除了", id);
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const length = () => {
    return todoList.length;
  };

  const filter = (flag: Type) => {
    setShowState(flag);
  };

  const triggerItem = (id: string) => {
    const copy = [...todoList];
    const item = copy.find((item) => item.id === id);
    if (item) {
      item.complete = !item.complete;
    }
    setTodoList(copy);
  };

  const triggerAll = () => {
    setTodoList(
      todoList.map((item) => {
        item.complete = allDone ? false : true;
        return item;
      })
    );
  };

  return (
    <TodoContext.Provider
      children={children}
      value={{
        allDone,
        todoList: filterList,
        addItem,
        deleteItemById,
        length,
        filter,
        triggerItem,
        triggerAll,
      }}
    ></TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = React.useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo必须在TodoProvider中使用");
  }
  return context;
};
