import * as S from "./styles/Home.styled";
import { HCard, HHeader } from "../components/Home";
import { useContext, useEffect } from "react";
import { ResStateContext } from "../reducer";

function Home() {
  const resList = useContext(ResStateContext);
  // useEffect(() => {
  //   const getDataLocalStorage = () => {
  //     let localData = JSON.parse(localStorage.getItem(guestList));
  //     return localData;
  //   };
  // }, []);

  const copyList = JSON.parse(JSON.stringify(resList));

  return (
    <S.HomeContainer>
      <HHeader />
      <S.Cards>
        {copyList.length > 0
          ? copyList.map((item: any) => {
              return <HCard key={item.id} {...item} />;
            })
          : "새로운 예약이 없습니다"}
      </S.Cards>
    </S.HomeContainer>
  );
}

export default Home;
