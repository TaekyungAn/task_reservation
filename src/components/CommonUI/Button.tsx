import styled from "styled-components";

const ButtonContainer = styled.button<IButton>`
  /* 기존 스타일 리셋 */
  outline: 0;
  border: 0;
  /* props 스타일 */
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontsize }) => fontsize};
  color: ${({ textcolor }) => (textcolor === "white" ? "white" : "#E5511C")};
  background-color: ${({ bgcolor }) =>
    bgcolor === "white" ? "white" : "orange"};

  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px 0px;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface IButton extends React.HTMLAttributes<HTMLElement> {
  width: string;
  height: string;
  bgcolor: ButtonColor;
  textcolor: ButtonColor;
  fontsize: string;
  children: React.ReactNode;
}
type ButtonColor = "orange" | "white";

function Button({
  children,
  width,
  height,
  bgcolor,
  textcolor,
  fontsize,
  ...otherProps
}: IButton) {
  return (
    <ButtonContainer
      width={width}
      height={height}
      bgcolor={bgcolor}
      textcolor={textcolor}
      fontsize={fontsize}
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
