import { FC } from "react";

import { Avatar, Button, Layout, Menu } from "antd";
import { Nav_Routes } from "../../constants";
import { CaretDownOutlined } from "@ant-design/icons";
const { Header: AntHeader } = Layout;
const Header: FC = () => {
  return (
    <AntHeader className="bg-white px-2 border-b flex items-center justify-between md:px-10 lg:px-32">
      <div className="logo" />
      <Menu
        className={`relative w-full md:h-full md:py-0`}
        mode={"horizontal"}
        defaultSelectedKeys={["1"]}
        // items={Nav_Routes}
      >
        {Nav_Routes.map((menu) => {
          const Icon = menu.icon;
          return (
            <Menu.Item>
              <div className="flex items-center justify-start ">
                <Icon />
                <span>{menu.label}</span>
              </div>
            </Menu.Item>
          );
        })}
      </Menu>
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
