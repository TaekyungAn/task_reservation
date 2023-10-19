import styled from "styled-components";

const InputContainer = styled.input<IInput>`
  /* props 스타일 */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;

interface IInput extends React.HTMLAttributes<HTMLElement> {
  $width: string;
  $height?: string;
  placeholder?: string;
  children: React.ReactNode;
}

function Input({
  placeholder,
  children,
  $width,
  $height = "5rem",
  ...otherProps
}: IInput) {
  return (
    <>
      <InputContainer
        $width={$width}
        $height={$height}
        placeholder={placeholder}
        {...otherProps}
      >
        {children}
      </InputContainer>
    </>
  );
}

export default Input;
