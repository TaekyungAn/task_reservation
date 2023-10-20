import * as S from "./styles/Card.styled";
import { CButton, CIcon } from "../CommonUI";
import { IDummyList } from "../../data/datalist";

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
    <S.CardContainer>
      <S.Information>
        <S.PersonalInfo>
          <span>{name}</span>
          <button>
            <CIcon $name={"phone"} />
            {phone}
          </button>
        </S.PersonalInfo>
        <S.DateInfo>
          <CIcon $name={"event_available"} />
          {/* {new Date(reserved_time).toLocaleDateString()} */}
          Today, 2:00 PM
        </S.DateInfo>
        <S.PartyInfo>
          <CIcon $name={"group"} />
          {guests}
        </S.PartyInfo>
        <S.TableInfo>
          <span>Reserved Table</span> {table} . <span> Floor 1</span>
        </S.TableInfo>
        <S.AdttionalInfo>
          {note}
          <CIcon $name={"edit"} />
        </S.AdttionalInfo>
      </S.Information>
      <S.Buttons>
        <CButton
          $width={"5rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          style={{ flexShrink: 0 }}
        >
          <CIcon $name={"trash"} />
        </CButton>
        <CButton
          $width={"17rem"}
          $bgcolor={"orange"}
          $textcolor={"white"}
          style={{ flex: 1 }}
        >
          Seated
        </CButton>
      </S.Buttons>
    </S.CardContainer>
  );
}

export default Card;
