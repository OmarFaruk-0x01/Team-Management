import React, { useState } from "react";
import { Skeleton, Switch, Card, Avatar, Tooltip } from "antd";
import {
  AntDesignOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const TeamCard = () => {
  return (
    <Card
      style={{
        marginTop: 16,
      }}
    >
      <Meta title="Team Name" description="primary mail" />
      <Avatar.Group
        className="absolute bottom-3 right-2 mt-5"
        maxCount={2}
        maxPopoverTrigger="click"
        size="large"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          cursor: "pointer",
        }}
      >
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar
          style={{
            backgroundColor: "#f56a00",
          }}
        >
          K
        </Avatar>
        <Tooltip title="Ant User" placement="top">
          <Avatar
            style={{
              backgroundColor: "#87d068",
            }}
            icon={<UserOutlined />}
          />
        </Tooltip>
        <Avatar
          style={{
            backgroundColor: "#1890ff",
          }}
          icon={<AntDesignOutlined />}
        />
      </Avatar.Group>
    </Card>
  );
};

export default TeamCard;
