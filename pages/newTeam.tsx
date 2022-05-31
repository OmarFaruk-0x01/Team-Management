import type { NextPage } from "next";
import { Button, Checkbox, Col, Modal, Radio, Row, Switch } from "antd";
import { useState } from "react";
import { PlusOutlined, TeamOutlined } from "@ant-design/icons";
import Header from "../components/header";
import Input from "../components/Input";
import Select from "../components/Select";
import { Countries } from "../constants";
import MemberItem from "../components/MemberItem";
import Layout from "../components/Layout";

const NewTeamPage: NextPage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Layout>
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
      </div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-2xl">Member</h2>
          <span className="flex items-center mt-1 justify-center w-5 h-5  bg-blue-500 rounded-full text-white text-sm">
            3
          </span>
        </div>
        <div className="flex items-center justify-end">
          <Button
            onClick={showModal}
            className="flex items-center gap-2 rounded-md !ml-auto !bg-gradient-to-br from-lime-400 to-green-500 text-white hover:!from-green-500 focus:!text-white hover:!text-white border-0 transition-all duration-300"
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

      <Modal
        title="Add Member"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{
          style: { borderRadius: ".3rem" },
          className: "text-black",
        }}
        cancelButtonProps={{ style: { borderRadius: ".3rem" } }}
      >
        <div className="py-5 flex flex-col items-start justify-center gap-x-10 gap-y-5">
          <Input label="Member name" />
          <Input label="Primary Email" />
          <Select data={Countries} label="Country" />
          <Checkbox>Is Admin</Checkbox>
        </div>
      </Modal>
      <div className="flex flex-col items-start">
        <Input
          _inputContainerProps={{ style: { maxWidth: 400 } }}
          placeholder="search"
        />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 my-7">
          <MemberItem
            name="Omar Faruk"
            role="Frontend Developer"
            country={Countries[0]}
            isAdmin
          />
          <MemberItem
            name="Omar Faruk"
            role="Frontend Developer"
            country={Countries[0]}
            isAdmin={false}
          />
          <MemberItem
            name="Omar Faruk"
            role="Frontend Developer"
            country={Countries[0]}
            isAdmin={false}
          />
          <MemberItem
            name="Omar Faruk"
            role="Frontend Developer"
            country={Countries[0]}
            isAdmin={false}
          />
        </div>
      </div>
    </Layout>
  );
};

export default NewTeamPage;
