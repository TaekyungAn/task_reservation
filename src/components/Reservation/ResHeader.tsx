import styled from "styled-components";
import Button from "../CommonUI/Button";
import CloseBtn from "../CommonUI/CloseBtn";
import { useNavigate } from "react-router-dom";

const ResHeaderContainer = styled.div`
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

function ResHeader() {
  const navigate = useNavigate();
  return (
    <ResHeaderContainer>
      <LeftBtn>
        <Button
          $width={"5rem"}
          $fontSize={"1.6rem"}
          $bgcolor={"white"}
          $textcolor={"orange"}
          onClick={() => {
            navigate(`/`);
          }}
        >
          {/* 아이콘 경로 설정 안됨!!! */}
          {/* <img src="../../assets/icons/add.svg" alt="추가 아이콘" /> */}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id=" Round / Hardware / keyboard_backspace">
              <path
                id="&#240;&#159;&#148;&#185; Icon Color"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M29.9997 16.5H10.2447L14.5647 12.18C15.1497 11.595 15.1497 10.65 14.5647 10.065C13.9797 9.47997 13.0347 9.47997 12.4497 10.065L5.56473 16.95C4.97973 17.535 4.97973 18.48 5.56473 19.065L12.4497 25.95C13.0347 26.535 13.9797 26.535 14.5647 25.95C15.1497 25.365 15.1497 24.42 14.5647 23.835L10.2447 19.5H29.9997C30.8247 19.5 31.4997 18.825 31.4997 18C31.4997 17.175 30.8247 16.5 29.9997 16.5Z"
                fill="#57534E"
              />
            </g>
          </svg>
        </Button>
      </LeftBtn>
      <span>New Reservation</span>
      <RightBtn>
        <CloseBtn />
      </RightBtn>
    </ResHeaderContainer>
  );
}

export default ResHeader;
