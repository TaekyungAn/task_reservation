import * as S from "./styles/Home.styled";
import { HCard, HHeader } from "../components/Home";
import { useLocation } from "react-router-dom";
import { IDummyList, dummyList } from "../data/datalist";
import { useContext } from "react";
import { ResStateContext } from "../reducer";

function Home() {
  // const location = useLocation();
  // const resInfo = { ...location.state };
  // console.log(resInfo);
  const resList = useContext(ResStateContext);
  console.log(resList);

  return (
    <S.HomeContainer>
      <HHeader />
      <S.Cards>
        {resList.length > 0
          ? resList.map((item: any) => {
              return <HCard key={item.id} {...item} />;
            })
          : "새로운 예약이 없습니다"}
      </S.Cards>
    </S.HomeContainer>
  );
}

export default Home;
