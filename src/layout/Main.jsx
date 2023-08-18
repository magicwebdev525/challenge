/**
 * @file: Main.jsx
 * @description: Main part of page
 */

import { Content } from "antd/es/layout/layout";
import { NFTCard } from "../components";
import { Col, Row, Input, Empty, FloatButton } from "antd";
import { useEffect, useState } from "react";
import { getData } from "../api";
const nftDt = [
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Queen",
    price: 5.1,
    img: "assets/img/3.png",
  },
  {
    name: "Grand",
    price: 453.8,
    img: "assets/img/4.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
  {
    name: "CrownHead",
    price: 45.8,
    img: "assets/img/1.png",
  },
  {
    name: "Fish",
    price: 5.7,
    img: "assets/img/2.png",
  },
  {
    name: "Captain",
    price: 15.8,
    img: "assets/img/5.png",
  },
];

export const Main = () => {
  const [currentIndex, setCurrentIndex] = useState(12);
  const [balance, setBalance] = useState(nftDt.slice(0, 12));
  //TODO: Because I cannot fetch necessary data from provided url, so I used temp data.
  //      If you can fetch desired data successfully, you can test with just following line and comment next line.
  // const [nfts, setNfts] = useState(getData().then((res) => setNfts(res)));
  const [nfts, setNfts] = useState(nftDt);
  const searchHandle = (e) => {
    let tempArr = [];
    let inputVal = e.target.value.toLowerCase();
    tempArr = nftDt.filter(
      (item) =>
        item.name.toLowerCase().includes(inputVal) ||
        item.price.toString().includes(inputVal)
    );
    setNfts(tempArr);
    setBalance(tempArr);
  };

  useEffect(() => {
    const fetchData = () => {
      const itemsFetch = 6;
      const nextItems = nfts.slice(currentIndex, currentIndex + itemsFetch);
      setCurrentIndex(currentIndex + itemsFetch);
      setBalance((prevNftDt) => [...prevNftDt, ...nextItems]);
    };
    const handleScroll = () => {
      if (
        document.documentElement.scrollTop +
          document.documentElement.clientHeight +
          30 >
        document.documentElement.scrollHeight
      ) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nfts, currentIndex, balance]);
  return (
    <Content className="flex flex-col justify-center items-center mt-[120px] mb-[90px]">
      <div className="lg:w-1/5 md: 1/4 sm:1/3 mb-10">
        <Input
          placeholder="input search text"
          size="large"
          onChange={searchHandle}
        />
      </div>

      <Row gutter={[20, 50]} className="w-11/12 flex justify-center">
        {balance.length === 0 ? (
          <Empty />
        ) : (
          balance.map((item, key) => (
            <Col
              key={key}
              className="gutter-row flex justify-center items-center"
              sm={12}
              md={10}
              lg={6}
              xl={4}
            >
              <NFTCard item={item} />
            </Col>
          ))
        )}
      </Row>
      <FloatButton.BackTop visibilityHeight={0} />
    </Content>
  );
};
