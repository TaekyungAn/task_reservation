import * as S from "./styles/Input.styled";
import { IInput } from "./types/Input.type";

function Input({
  placeholder,
  children,
  $width,
  $height = "5rem",
  ...otherProps
}: IInput) {
  return (
    <>
      <S.InputContainer
        $width={$width}
        $height={$height}
        placeholder={placeholder}
        {...otherProps}
      >
        {children}
      </S.InputContainer>
    </>
  );
}

export default Input;
