import { FC, ReactNode } from "react";
import { Layout as AntLayout } from "antd";
import Header from "./header";
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AntLayout className="w-full">
      <Header />
      <div className="bg-white px-5 md:px-10 lg:px-32">{children}</div>
    </AntLayout>
  );
};
export default Layout;
