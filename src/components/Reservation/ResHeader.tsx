import * as S from "./styles/ResHeader.styled";
import { CButton, CIcon } from "../CommonUI";
import { useNavigate } from "react-router-dom";

interface IResHeader {
  children: React.ReactNode;
}

function ResHeader({ children }: IResHeader) {
  const navigate = useNavigate();
  return (
    <S.ResHeaderContainer>
      <S.LeftBtn>
        <CButton
          $width={"5rem"}
          $fontSize={"1.6rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          onClick={() => {
            navigate(`/`);
          }}
        >
          <CIcon $name="keyboard_backspace" />
        </CButton>
      </S.LeftBtn>
      <span>{children}</span>
      <S.RightBtn>
        <CIcon $name="close" />
      </S.RightBtn>
    </S.ResHeaderContainer>
  );
}

export default ResHeader;
