import styled from "styled-components";
import { IButton } from "../types/Button.type";

export const ButtonContainer = styled.button<IButton>`
  /* props 스타일 */
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};
  font-size: ${({ $fontSize }) => $fontSize};
  color: ${({ $textcolor }) =>
    $textcolor === "white" ? "white" : "orange" ? "#EC551F" : "black"};
  background-color: ${({ $bgcolor }) =>
    $bgcolor === "white" ? "white" : "#EC551F"};
`;
