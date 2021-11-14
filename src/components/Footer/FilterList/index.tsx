import React from "react";
import { Radio } from "antd";
import { useTodo } from "../../../utils/context";
import { Type } from "../../../utils/constant";

export default function FilterList() {
  const { filter } = useTodo();
  return (
    <Radio.Group
      defaultValue={`all`}
      style={{ marginLeft: 10 }}
      onChange={(e) => {
        filter(e.target.value);
      }}
    >
      <Radio.Button value={Type.ALL}>全部</Radio.Button>
      <Radio.Button value={Type.COMPLETED}>已完成</Radio.Button>
      <Radio.Button value={Type.ACTIVE}>未完成</Radio.Button>
    </Radio.Group>
  );
}
