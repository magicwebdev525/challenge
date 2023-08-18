/**
 * @file: Navbar.jsx
 * @description: navbar of pages
 */

import { Header } from "antd/es/layout/layout";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 70,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
  fontSize: "26px",
  fontWeight: "bold",
  position: "fixed",
  top: "0px",
  width: "100%",
  zIndex: "10",
};

export const Navbar = () => {
  return <Header style={headerStyle}>Magic Eden</Header>;
};
