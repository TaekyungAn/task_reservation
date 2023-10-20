import styled from "styled-components";

export const CardContainer = styled.div`
  /* width: 30rem;
  height: 40rem; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
  border-radius: 1rem;
  padding: 1.8rem;

  font-size: 1.6rem;
`;
export const Information = styled.div`
  div {
    margin-bottom: 1.8rem;
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 0.5rem;
  }
`;
export const PersonalInfo = styled.div`
  button {
    margin-left: 1.5rem;
    background-color: white;
    height: 3rem;
    border-radius: 2rem;
    color: ${(props) => props.theme.gray.font_color};
  }
`;
export const DateInfo = styled.div``;
export const PartyInfo = styled.div``;
export const TableInfo = styled.div`
  span {
    color: ${(props) => props.theme.gray.font_color};
    margin-right: 1rem;
  }
`;
export const AdttionalInfo = styled.div`
  color: ${(props) => props.theme.gray.font_color};
  img {
    margin-left: 0.5rem;
  }
`;
export const Buttons = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
`;
