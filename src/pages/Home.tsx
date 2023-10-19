import styled from "styled-components";
import Header from "../components/Home/Header";
import Card from "../components/Home/Card";
import { IDummyList, dummyList } from "../data/datalist";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const HomeContainer = styled.header`
  background-color: ${(props) => props.theme.gray.home_background};
  width: 100%;
  height: 100%;
  min-height: 30rem;
  border-radius: 1.1rem;
  overflow: scroll;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(20rem, auto);
  gap: 1.8rem;

  padding: 1.8rem;
`;

function Home() {
  const location = useLocation();
  const resInfo = { ...location.state };
  console.log(resInfo);

  // console.log("home", resInfo);
  // useEffect(() => {
  //   setData([resInfo, ...data]);
  // }, []);

  return (
    <HomeContainer>
      <Header />

      <Cards>
        {resInfo.length > 0
          ? resInfo.map((item: IDummyList) => {
              return <Card key={item.id} {...item} />;
            })
          : "새로운 예약이 없습니다"}
      </Cards>
    </HomeContainer>
  );
}

export default Home;
