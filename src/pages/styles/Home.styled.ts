import styled from "styled-components";

export const HomeContainer = styled.header`
  background-color: ${(props) => props.theme.gray.home_background};
  width: 100%;
  height: 100%;
  min-height: 30rem;
  border-radius: 1.1rem;
  overflow: scroll;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: minmax(20rem, auto);
  gap: 1.8rem;

  padding: 1.8rem;
`;
