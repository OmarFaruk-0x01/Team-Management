import Image from "next/image";
import { FC } from "react";
import { MemberTypes } from "../types";
import React, { useState } from "react";
import {
  Skeleton,
  Switch,
  Card,
  Avatar,
  Typography,
  Badge,
  Tooltip,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const MemberItem: FC<MemberTypes> = ({ name, role, isAdmin, country }) => {
  const actions = [
    <Tooltip title="Make Admin">
      <UserOutlined key="setting" />
    </Tooltip>,
    <Tooltip title="Edit">
      <EditOutlined key="edit" />
    </Tooltip>,
    <Tooltip title="Delete">
      <DeleteOutlined key="sada" />
    </Tooltip>,
  ];
  return (
    <Badge.Ribbon
      text={"Admin"}
      prefixCls="card-ribbon"
      className={!isAdmin ? "hidden" : ""}
    >
      <Card
        className="rounded-md"
        actions={actions.slice(isAdmin ? 1 : 0, actions.length)}
      >
        <Meta
          avatar={
            <Avatar
              src="https://joeschmoe.io/api/v1/"
              shape="circle"
              size={"large"}
            />
          }
          title={name}
          description={role}
        />
        <span className="text-xl absolute right-4 bottom-14">
          {country.emoji}
        </span>
      </Card>
    </Badge.Ribbon>
  );
};

export default MemberItem;
