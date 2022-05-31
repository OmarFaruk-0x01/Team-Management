import type { NextPage } from "next";
import {
  Button,
  Checkbox,
  Col,
  Modal,
  Radio,
  Row,
  Skeleton,
  Switch,
} from "antd";
import { useEffect, useState } from "react";
import { PlusOutlined, TeamOutlined } from "@ant-design/icons";
import Header from "../components/header";
import Input from "../components/Input";
import Select from "../components/Select";
import { Countries } from "../constants";
import MemberItem from "../components/MemberItem";
import Layout from "../components/Layout";
import TeamCard from "../components/TeamCard";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../store";
import { getAllTeams } from "../store/slices/teamSlice";

const Home: NextPage = () => {
  const teams = useSelector((state: RootState) => state.teams.teams);
  const loading = useSelector((state: RootState) => state.teams.loading);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllTeams());
  }, [dispatch]);

  return (
    <Layout>
      <div className="flex mt-10 items-center gap-2 text-3xl ">
        <TeamOutlined className="text-blue-500" />
        <span>
          <h2 className="font-semibold">Teams</h2>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        <Skeleton loading={loading}>
          {teams.map((team) => (
            <TeamCard key={team.name} />
          ))}
        </Skeleton>
      </div>
    </Layout>
  );
};

export default Home;
