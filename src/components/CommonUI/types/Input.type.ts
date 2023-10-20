export interface IInput extends React.HTMLAttributes<HTMLElement> {
  $width: string;
  $height?: string;
  placeholder?: string;
  children: React.ReactNode;
}
