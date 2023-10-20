import * as S from "./styles/Button.styled";
import { IButton } from "./types/Button.type";

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
    <S.ButtonContainer
      $width={$width}
      $height={$height}
      $bgcolor={$bgcolor}
      $textcolor={$textcolor}
      $fontSize={$fontSize}
      {...otherProps}
    >
      {children}
    </S.ButtonContainer>
  );
}

export default Button;
