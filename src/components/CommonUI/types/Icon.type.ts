export interface IICon extends React.HTMLAttributes<HTMLElement> {
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
