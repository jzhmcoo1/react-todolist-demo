import React from "react";
import ClearButton from "./ClearButton";
import FilterList from "./FilterList";
import TodoCount from "./TodoCount";

export default function Footer() {
  return (
    <div>
      <TodoCount />
      <FilterList />
      <ClearButton />
    </div>
  );
}
