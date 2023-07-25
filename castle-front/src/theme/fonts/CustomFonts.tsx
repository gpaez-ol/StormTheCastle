import { Global } from "@mantine/core";

function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "inter",
            src: `url('https://fonts.googleapis.com/css?family=Inter:regular,bold,italic')`,
          },
        },
      ]}
    />
  );
}

export { CustomFonts };
