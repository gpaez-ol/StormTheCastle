import {
  ButtonStylesParams,
  CSSObject,
  MantineSize,
  MantineTheme,
} from "@mantine/core";
import { ThemeComponent } from "../types";

// function getButtonSize(theme: MantineTheme, size: MantineSize): CSSObject {
//   if (size === "sm") {
//     return {
//       width: 160,
//       height: 48,
//       borderRadius: 24,
//     };
//   }

//   if (size === "xl") {
//     return {
//       width: 480,
//       height: 64,
//       borderRadius: 32,
//     };
//   }

//   return {};
// }


const CASTLE_BUTTON_THEME: ThemeComponent = {
  styles: (theme, params: ButtonStylesParams) => ({
    root: {
      fontSize: 18,
      backgroundColor: theme.colorScheme === "light" ? "white" : "black",
      color: theme.colorScheme === "light" ? "black" : "white",
      "&:hover": {
        backgroundColor: theme.colorScheme === "light" ? "white" : "black",
      },
      // ...getButtonSize(theme, params.),
    },
  }),
  defaultProps: { size: "md" },
};

export { CASTLE_BUTTON_THEME };
