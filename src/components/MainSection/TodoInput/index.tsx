import React, { useState } from "react";
import { Input, Button } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useTodo } from "../../../utils/context";
import { nanoid } from "nanoid";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn"); // 使用本地化语言

export default function TodoInput() {
  const [state, setState] = useState("");

  const { addItem, triggerAll } = useTodo();
  return (
    <>
      <Input
        size="large"
        placeholder="请输入待办事项，输入Enter键进行添加"
        prefix={<Button icon={<CheckOutlined />} onClick={triggerAll} />}
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        onKeyUp={(event) => {
          if (event.key.toLowerCase() === "enter") {
            addItem({
              id: nanoid(),
              text: state,
              complete: false,
              time: dayjs(),
            });
            setState("");
          }
        }}
      />
    </>
  );
}
