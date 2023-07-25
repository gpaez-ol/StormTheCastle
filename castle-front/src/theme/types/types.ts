import { MantineThemeOverride } from "@mantine/core";
import { InferRecordValueArg } from "../../utils";

type ThemeComponent = InferRecordValueArg<MantineThemeOverride["components"]>;

export type { ThemeComponent };
