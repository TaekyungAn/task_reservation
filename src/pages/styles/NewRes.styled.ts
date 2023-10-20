import styled from "styled-components";

export const NewResContainer = styled.header`
  background-color: ${(props) => props.theme.gray.home_background};
  width: 100%;
  height: 100%;
  min-height: 30rem;
  border-radius: 1.1rem;
  overflow: scroll;
  font-size: 1.6rem;
`;
export const Information = styled.form`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  & > div {
    margin-bottom: 3rem;
  }
`;
export const PersonalInfo = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: space-between;
  > input {
    height: 6rem;
    flex-grow: 1;
    border-radius: 1rem;
    border: 1px gray solid;
  }
`;
export const DateInfo = styled.div``;
export const PartyInfo = styled.div`
  display: flex;
`;
export const GuestesNumber = styled.div`
  display: flex;
  & > .num {
    font-size: 3.2rem;
  }
`;
export const TableInfo = styled.div``;
export const AdttionalInfo = styled.div`
  & textarea {
    height: 18rem;
  }
`;
