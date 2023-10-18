import styled from "styled-components";
import Button from "../CommonUI/Button";
import CloseBtn from "../CommonUI/CloseBtn";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 8.6rem;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  border-radius: 1.1rem 1.1rem 0 0;

  span {
    font-size: 2.4rem;
    color: ${(props) => props.theme.gray.font_color};
  }
`;
const LeftBtn = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  left: 2rem;
  height: 100%;
`;
const RightBtn = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 2rem;
`;

function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <LeftBtn>
        <Button
          $width={"18rem"}
          $height={"5rem"}
          $fontSize={"1.6rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          onClick={() => {
            navigate(`/new_res`);
          }}
        >
          {/* 아이콘 경로 설정 안됨!!! */}
          {/* <img src="../../assets/icons/add.svg" alt="추가 아이콘" /> */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id=" Round / Content / add">
              <path
                id="&#240;&#159;&#148;&#185;Icon Color"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                fill="#EC551F"
              />
            </g>
          </svg>
          New Reservation
        </Button>
      </LeftBtn>
      <span>Reservation</span>
      <RightBtn>
        <CloseBtn />
      </RightBtn>
    </HeaderContainer>
  );
}

export default Header;
