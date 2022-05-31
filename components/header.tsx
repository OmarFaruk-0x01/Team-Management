import { FC } from "react";

import { Avatar, Button, Layout, Menu } from "antd";
import { Nav_Routes } from "../constants";
import { CaretDownOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const { Header: AntHeader } = Layout;
const Header: FC = () => {
  const nav = useRouter();
  const onClick = (route: string) => {
    return () => nav.push("/" + route);
  };
  return (
    <AntHeader className="bg-white px-2 border-b flex items-center justify-between md:px-10 lg:px-32">
      <div className="logo" />
      <Menu
        className={`relative w-full md:h-full md:py-0`}
        mode={"horizontal"}
        items={Nav_Routes}
        onSelect={(info) => {
          onClick(info.selectedKeys[0] === "/" ? "" : info.selectedKeys[0])();
        }}
        activeKey={nav.pathname.slice(1) || '/'}
      />

      <div className="flex flex-1 items-center justify-end">
        <Avatar />
        <Button
          type="text"
          size="large"
          shape="default"
          className="hidden md:flex  !items-center  gap-2"
        >
          <span>Omar</span>
          <span>
            <CaretDownOutlined className="text-sm mb-2" />
          </span>
        </Button>
      </div>
    </AntHeader>
  );
};

export default Header;
