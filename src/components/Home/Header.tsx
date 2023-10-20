import * as S from "./styles/Header.styled";
import { CIcon, CButton } from "../CommonUI";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <S.HeaderContainer>
      <S.LeftBtn>
        <CButton
          $width={"18rem"}
          $height={"5rem"}
          $fontSize={"1.6rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          onClick={() => {
            navigate(`/new_res`);
          }}
        >
          <CIcon $name="add" />
          New Reservation
        </CButton>
      </S.LeftBtn>
      <span>Reservation</span>
      <S.RightBtn>
        <CIcon $name="close" />
      </S.RightBtn>
    </S.HeaderContainer>
  );
}

export default Header;
