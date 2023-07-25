import { MantineThemeOverride } from "@mantine/core";
import { CASTLE_BUTTON_THEME } from "./components";

const CASTLE_MANTINE_THEME: MantineThemeOverride = {
  colors: {
    "gray-green": [
      "#8CAAA2",
      "#78A297",
      "#639E8E",
      "#539684",
      "#44907C",
      "#358C75",
      "#26896F",
      "#2B7260",
      "#2D6153",
      "#2D5249",
    ],
    "eerie-black": [
      "#3C3C3C",
      "#373737",
      "#323232",
      "#2D2D2D",
      "#292929",
      "#252525",
      "#222222",
      "#1F1F1F",
      "#1C1C1C",
      "#191919",
    ],
  },
  colorScheme: "light",
  fontSizes: {
    xs: "10",
    sm: "13",
    md: "16",
    lg: "18",
    xl: "24",
  },
  globalStyles: () => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      margin: 0,
      scrollbarColor: "cyan"
    },
  }),
  headings: {
    sizes: {
      h1: {
        fontWeight: 45
      },
      h2: {
        fontWeight: 28,
      },
      h3: {
        fontWeight: 23,
      },
      h4: {
        fontWeight: 18,
      },
    },
  },
  primaryShade: 4,
  components: {
    Button: CASTLE_BUTTON_THEME,
    Input: {
      styles: () => ({
        input: {
          height: 56,
          color: "black",
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: 'Greycliff CF, sans-serif',
          padding: "0 39px",
          "&::placeholder": {
            opacity: 0.5,
          },
          borderRadius: 28,
        },
      }),
    },
    PasswordInput: {
      styles: () => ({
        innerInput: {
          height: 56,
          color: "black",
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: 'Greycliff CF, sans-serif',
          padding: "0 39px",
          "&::placeholder": {
            opacity: 0.5,
          },
          borderRadius: 28,
        },
      }),
    },
    Textarea: {
      styles: () => ({
        input: {
          height: 201,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: 'Greycliff CF, sans-serif',
          padding: "0 39px",
          "&::placeholder": {
            opacity: 0.5,
          },
          borderRadius: 28,
        },
        passwordInput: {
          height: 201,
          fontSize: 18,
          fontWeight: "bold",
          fontFamily: 'Greycliff CF, sans-serif',
          padding: "0 39px",
          "&::placeholder": {
            opacity: 0.5,
          },
          borderRadius: 28,
        },
      }),
    },
    Title: {
      styles: () => ({
        root: {
          fontFamily: 'Greycliff CF, sans-serif'
        },
      }),
    },
    Text: {
      styles: () => ({
        root: {
          fontFamily: 'Greycliff CF, sans-serif'
        },
      }),
    },
    Select: {
      styles: () => ({
        root: {
          width: 160,
          "& .mantine-Input-input": {
            height: 40,
            border: "2px solid #000000",
            borderRadius: 24,
            backgroundColor: "white",
            color: "black",
            fontSize: 13,
            padding: "10px 20px 10px 28px",
          },
          "& .mantine-Input-input::placeholder": {
            opacity: 1,
          },
        },
      }),
    },
    Switch: {
      styles: () => ({
        root: {
          "& .mantine-Switch-trackLabel": {
            cursor: "pointer",
          },
        },
      }),
    },
    Checkbox: {
      styles: () => ({
        root: {
          "& .mantine-Checkbox-input": {
            cursor: "pointer",
          },
        },
      }),
    },
  },
};

export { CASTLE_MANTINE_THEME };
