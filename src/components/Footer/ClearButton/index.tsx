import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useTodo } from "../../../utils/context";

export default function ClearButton() {
  const { deleteDone } = useTodo();
  return (
    <Button
      style={{ marginLeft: 8 }}
      icon={<DeleteOutlined />}
      onClick={deleteDone}
    >
      删除已完成
    </Button>
  );
}
