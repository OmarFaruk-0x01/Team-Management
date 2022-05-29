import type { NextPage } from "next";
import { Layout } from "antd";
import { useState } from "react";
import { TeamOutlined } from "@ant-design/icons";
import Header from "./components/header";
import Input from "./components/Input";
import Select from "./components/Select";
import { Countries } from "../constants";

const Home: NextPage = () => {
  return (
    <Layout className="w-full">
      <div className="bg-white px-5 md:px-10 lg:px-32">
        <Header />
        <div className="flex mt-10 items-center gap-2 text-3xl ">
          <TeamOutlined className="text-blue-500" />
          <span>
            <h2 className="font-semibold">New Team</h2>
          </span>
        </div>
        <div className="py-5 grid grid-cols-1 md:grid-cols-2   gap-x-10 gap-y-5">
          <Input label="Team name" />
          <Input label="Primary Email" />
          <Input label="Company Name" />
          <Select data={Countries} label="Country" />
          <Input label="Password" type="password" />
          <Input label="Repeat Password" type="password" />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
