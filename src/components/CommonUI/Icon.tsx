import { IICon } from "./types/Icon.type";

function Icon({ $name }: IICon) {
  const IMG_PATH = `/assets/icons/`;
  return <img src={`${IMG_PATH}${$name}.svg`} alt={$name}></img>;
}

export default Icon;
