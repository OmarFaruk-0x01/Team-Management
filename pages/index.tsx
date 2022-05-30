import type { NextPage } from "next";
import { Button, Layout } from "antd";
import { useState } from "react";
import { PlusOutlined, TeamOutlined } from "@ant-design/icons";
import Header from "./components/header";
import Input from "./components/Input";
import Select from "./components/Select";
import { Countries } from "../constants";

const Home: NextPage = () => {
  return (
    <Layout className="w-full">
      <Header />
      <div className="bg-white px-5 md:px-10 lg:px-32">
        <div>
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
          <div className="flex items-center justify-end">
            <Button
              className="flex items-center gap-2 rounded-md !ml-auto !bg-gradient-to-br from-lime-400 to-green-500 text-white  hover:!from-green-500 hover:text-white border-0 transition-all duration-300"
              size="large"
            >
              <span>
                <PlusOutlined
                  className="!inline-block !mb-2"
                  style={{ marginBottom: 20 }}
                />
              </span>
              <span>Add</span>
            </Button>
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="font-semibold text-2xl">Member</h2>
            <span className="flex items-center justify-center w-5 h-5  bg-blue-500 rounded-full text-white text-sm">
              3
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
