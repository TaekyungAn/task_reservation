/* eslint-disable array-callback-return */
import styled from "styled-components";
import Button from "../CommonUI/Button";
import Icon from "../CommonUI/Icon";
import { IDummyList, dummyList } from "../../data/datalist";

const CardContainer = styled.div`
  /* width: 30rem;
  height: 40rem; */
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
  border-radius: 1rem;
  padding: 1.8rem;

  font-size: 1.6rem;
`;
const Information = styled.div`
  div {
    margin-bottom: 1.8rem;
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 0.5rem;
  }
`;
const PersonalInfo = styled.div`
  button {
    margin-left: 1.5rem;
    background-color: white;
    height: 3rem;
    border-radius: 2rem;
    color: ${(props) => props.theme.gray.font_color};
  }
`;
const DateInfo = styled.div``;
const PartyInfo = styled.div``;
const TableInfo = styled.div`
  span {
    color: ${(props) => props.theme.gray.font_color};
    margin-right: 1rem;
  }
`;
const AdttionalInfo = styled.div`
  color: ${(props) => props.theme.gray.font_color};
  img {
    margin-left: 0.5rem;
  }
`;
const Buttons = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: space-between;
`;

function Card({
  name,
  guests,
  note,
  phone,
  reserved_date,
  reserved_time,
  table,
}: IDummyList) {
  return (
    <CardContainer>
      <Information>
        <PersonalInfo>
          <span>{name}</span>
          <button>
            <Icon $name={"phone"} />
            {phone}
          </button>
        </PersonalInfo>
        <DateInfo>
          <Icon $name={"event_available"} />
          {/* {new Date(reserved_time).toLocaleDateString()} */}
          Today, 2:00 PM
        </DateInfo>
        <PartyInfo>
          <Icon $name={"group"} />
          {guests}
        </PartyInfo>
        <TableInfo>
          <span>Reserved Table</span> {table} . <span> Floor 1</span>
        </TableInfo>
        <AdttionalInfo>
          {note}
          <Icon $name={"edit"} />
        </AdttionalInfo>
      </Information>
      <Buttons>
        <Button
          $width={"5rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          style={{ flexShrink: 0 }}
        >
          <Icon $name={"trash"} />
        </Button>
        <Button
          $width={"17rem"}
          $bgcolor={"orange"}
          $textcolor={"white"}
          style={{ flex: 1 }}
        >
          Seated
        </Button>
      </Buttons>
    </CardContainer>
  );
}

export default Card;
