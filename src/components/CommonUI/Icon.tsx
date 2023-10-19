interface IICon extends React.HTMLAttributes<HTMLElement> {
  $name: IconName | undefined;
}

type IconName =
  | "add"
  | "alarm_on"
  | "arrow_drop_down"
  | "chevron-down"
  | "chevron-up"
  | "close"
  | "edit"
  | "event_available"
  | "group"
  | "keyboard_backspace"
  | "math-minus"
  | "math-plus"
  | "phone"
  | "today"
  | "trash";

function Icon({ $name }: IICon) {
  const IMG_PATH = `/assets/icons/`;
  return <img src={`${IMG_PATH}${$name}.svg`} alt={$name}></img>;
}

export default Icon;
