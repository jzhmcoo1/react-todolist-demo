import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
export default function MainSection() {
  return (
    <div>
      <TodoInput />
      <TodoList />
    </div>
  );
}
