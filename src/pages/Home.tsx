import styled from "styled-components";
import Header from "../components/Home/Header";
import Card from "../components/Home/Card";

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
  return (
    <HomeContainer>
      <Header />
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </HomeContainer>
  );
}

export default Home;
