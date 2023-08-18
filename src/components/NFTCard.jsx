/**
 * @file: NFTCard.jsx
 * @description: an individual card that have got nft, name, price, etc
 */

import React from "react";
import { Card, Typography } from "antd";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  & .ant-card-meta-title {
    margin-bottom: 0 !important;
  }
`;

export const NFTCard = ({ item }) => (
  <StyledCard
    hoverable
    style={{
      width: 240,
      height: 330,
    }}
    cover={<img className="h-[240px]" alt="example" src={item.img} />}
  >
    <div className="flex flex-wrap justify-between items-center mt-[10px]">
      <Typography className="text-[18px] font-bold text-[#343f99]">
        {item.name}
      </Typography>
      <Typography>
        <span className="text-[#eb5858]">{item.price}</span> sol
      </Typography>
    </div>
  </StyledCard>
);
