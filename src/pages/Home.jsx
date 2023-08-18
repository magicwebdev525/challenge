/**
 * @file: Home.jsx
 * @description: Landing page of this project
 */

import { Layout, Space } from "antd";
import { Navbar, CustomFooter, Main } from "../layout";
export const Home = () => {
  return (
    <Space direction="vertical" className="w-full">
      <Layout>
        <Navbar />
        <Main />
        <CustomFooter />
      </Layout>
    </Space>
  );
};
