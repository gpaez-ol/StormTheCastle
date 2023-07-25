import { Box, Sx, Text } from "@mantine/core";
import * as React from "react";

type FormControlProps = React.PropsWithChildren<{
  label?: string;
  error?: string;
  sx?: Sx;
}>;

function FormControl(props: FormControlProps) {
  const { label, error, children, sx } = props;

  return (
    <Box sx={[{ position: "relative" }, sx]}>
      {label && (
        <Text
          sx={{
            marginLeft: 40,
            marginBottom: 12,
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {label}
        </Text>
      )}
      {children}
      {error && (
        <Text
          sx={{
            color: "red",
            fontSize: "14px",
            position: "absolute",
            maxWidth: "100%",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
          title={error}
        >
          {error}
        </Text>
      )}
    </Box>
  );
}

export { FormControl };
