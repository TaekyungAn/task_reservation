import styled from "styled-components";

export const ResHeaderContainer = styled.div`
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
export const LeftBtn = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  left: 2rem;
  height: 100%;
`;
export const RightBtn = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  right: 2rem;
`;
