/**
 * @file: Footer.jsx
 * @description: footer of pages
 */

import { Footer } from "antd/es/layout/layout";
const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
  position: "fixed",
  width: "100%",
  bottom: "0px",
};
export const CustomFooter = () => {
  return <Footer style={footerStyle}>{new Date().getFullYear()}</Footer>;
};
