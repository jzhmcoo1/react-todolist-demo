import React from "react";
import { List, Button, Typography } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { useTodo } from "../../../utils/context";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.locale("zh-CN");
dayjs.extend(relativeTime);

const { Text } = Typography;

export default function TodoList() {
  const { todoList, deleteItemById, triggerItem } = useTodo();
  return (
    <List
      itemLayout="horizontal"
      dataSource={todoList}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              type="text"
              icon={<DeleteOutlined />}
              onClick={() => {
                deleteItemById(item.id);
              }}
            />,
            <Button
              type="text"
              icon={<CheckOutlined />}
              onClick={() => {
                triggerItem(item.id);
              }}
            />,
          ]}
        >
          <List.Item.Meta
            avatar={
              item.complete ? (
                <Text type="success" children={"已完成"} />
              ) : (
                <Text type="warning" children={"未完成"} />
              )
            }
            title={item.text}
            description={item.time.fromNow()}
          />
        </List.Item>
      )}
    />
  );
}
