import styled from "styled-components";

const ButtonContainer = styled.button<IButton>`
  /* props 스타일 */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $textcolor }) =>
    $textcolor === "white" ? "white" : "orange" ? "#EC551F" : "black"};
  background-color: ${({ $bgcolor }) =>
    $bgcolor === "white" ? "white" : "#EC551F"};
`;

interface IButton extends React.HTMLAttributes<HTMLElement> {
  $width: string;
  $height?: string;
  $bgcolor: ButtonColor;
  $textcolor: ButtonColor;
  $fontSize?: string;
  children: React.ReactNode;
}
type ButtonColor = "orange" | "white" | "black";

function Button({
  children,
  $width,
  $height = "5rem",
  $bgcolor,
  $textcolor,
  $fontSize = "1.6rem",
  ...otherProps
}: IButton) {
  return (
    <ButtonContainer
      $width={$width}
      $height={$height}
      $bgcolor={$bgcolor}
      $textcolor={$textcolor}
      $fontSize={$fontSize}
      {...otherProps}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
