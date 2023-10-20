import styled from "styled-components";
import { IInput } from "../types/Input.type";

export const InputContainer = styled.input<IInput>`
  /* props 스타일 */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
`;
