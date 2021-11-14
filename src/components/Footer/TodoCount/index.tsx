import React from "react";
import { Typography } from "antd";
import { useTodo } from "../../../utils/context";

export default function TodoCount() {
  const { todoList } = useTodo();
  return <Typography.Text>{`总共 ${todoList.length} 条`}</Typography.Text>;
}
