import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    orange: {
      main_color: string;
    };
    gray: {
      home_background: string;
      font_color: string;
      icon_color: string;
    };
  }
}
