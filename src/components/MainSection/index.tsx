import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
export default function MainSection() {
  return (
    <div
      style={{
        minHeight: "calc(100vh - 80px - 64px)",
        margin: "0 20px",
        padding: "10px 0",
      }}
    >
      <TodoInput />
      <TodoList />
    </div>
  );
}
