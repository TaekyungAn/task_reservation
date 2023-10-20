import * as S from "./styles/Card.styled";
import { CButton, CIcon } from "../CommonUI";
import { IDummyList } from "../../data/datalist";
import { useContext } from "react";
import { ResDispatchContext } from "../../reducer";
import { useNavigate } from "react-router-dom";

function Card({
  id,
  name,
  guests,
  note,
  phone,
  reserved_date,
  reserved_time,
  table,
}: IDummyList) {
  const { onRemove } = useContext(ResDispatchContext);
  const navigate = useNavigate();
  const handleRemove = () => {
    if (window.confirm(`${name}손님을 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };
  const handleEdit = () => {
    console.log("clicked");

    if (window.confirm(`${name}의 내용을 수정하시겠습니까?`)) {
      navigate("/edit_res");
    }
  };

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
        <S.AdttionalInfo onClick={handleEdit}>
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
          onClick={handleRemove}
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
