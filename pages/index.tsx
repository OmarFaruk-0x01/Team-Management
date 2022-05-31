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
import TeamCard from "../components/TeamCard";

const Home: NextPage = () => {
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
        <div className="flex mt-10 items-center gap-2 text-3xl ">
          <TeamOutlined className="text-blue-500" />
          <span>
            <h2 className="font-semibold">Teams</h2>
          </span>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <TeamCard />
      </div>

    </Layout>
  );
};

export default Home;
