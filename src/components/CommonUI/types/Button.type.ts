export interface IButton extends React.HTMLAttributes<HTMLElement> {
  $width: string;
  $height?: string;
  $bgcolor: ButtonColor;
  $textcolor: ButtonColor;
  $fontSize?: string;
  children: React.ReactNode;
}
type ButtonColor = "orange" | "white" | "black";
