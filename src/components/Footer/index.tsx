import React from "react";
import ClearButton from "./ClearButton";
import FilterList from "./FilterList";
import TodoCount from "./TodoCount";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <TodoCount />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <FilterList />
        <ClearButton />
      </div>
    </div>
  );
}
