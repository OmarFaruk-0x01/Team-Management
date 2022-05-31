import {
  DashboardOutlined,
  GroupOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { createElement } from "react";
const Nav_Routes = [
  {
    key: "/",
    label: "Teams",
    icon: createElement(GroupOutlined),
  },
  {
    key: "newTeam",
    label: "New Team",
    icon: createElement(TeamOutlined),
  },
  {
    key: "editTeam",
    label: "Templates",
    icon: createElement(DashboardOutlined),
  },
  {
    key: "help",
    label: "Help",
    icon: createElement(DashboardOutlined),
  },
];

export default Nav_Routes;
