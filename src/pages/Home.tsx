import * as S from "./styles/Home.styled";
import { HCard, HHeader } from "../components/Home";
import { useLocation } from "react-router-dom";
import { IDummyList } from "../data/datalist";

function Home() {
  const location = useLocation();
  const resInfo = { ...location.state };
  console.log(resInfo);

  // console.log("home", resInfo);
  // useEffect(() => {
  //   setData([resInfo, ...data]);
  // }, []);

  return (
    <S.HomeContainer>
      <HHeader />
      <S.Cards>
        {resInfo.length > 0
          ? resInfo.map((item: IDummyList) => {
              return <HCard key={item.id} {...item} />;
            })
          : "새로운 예약이 없습니다"}
      </S.Cards>
    </S.HomeContainer>
  );
}

export default Home;
