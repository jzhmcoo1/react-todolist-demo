import React, { createContext, ReactNode, useState } from "react";
import { TodoItem } from "../typings/todo-item";

enum Type {
  active = "Active",
  complete = "Compeleted",
  all = "All",
}

interface TodoInterface {
  todoList: TodoItem[];
  addItem: (item: TodoItem) => void;
  deleteItem: (id: string) => void;
  length: () => number;
  filter: (flag: Type) => TodoItem[];
  done: (id: string) => void;
  doneAll: () => void;
}

const TodoContext = createContext<TodoInterface | undefined>(undefined);

TodoContext.displayName = "TodoContext";

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const addItem = (item: TodoItem) => {
    console.log("增加了", item);
    setTodoList([...todoList, item]);
  };

  const deleteItem = (id: string) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const length = () => {
    return todoList.length;
  };

  const filter = (flag: Type) => {
    switch (flag) {
      case "Active":
        return todoList.filter((item) => item.complete === false);
      case "Compeleted":
        return todoList.filter((item) => item.complete === true);
      default:
        return todoList;
    }
  };

  const done = (id: string) => {
    const item = todoList.find((item) => item.id === id);
    if (item) {
      item.complete = true;
    }
    setTodoList(todoList);
  };

  const doneAll = () => {
    setTodoList(
      todoList.map((item) => {
        item.complete = true;
        return item;
      })
    );
  };

  return (
    <TodoContext.Provider
      children={children}
      value={{ todoList, addItem, deleteItem, length, filter, done, doneAll }}
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
