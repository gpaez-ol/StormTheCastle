import { Box, Divider } from "@mantine/core";
import * as React from "react";
import { AppBar, ScrollToTop } from "../shared";

function MainLayout(props: React.PropsWithChildren) {
    const { children } = props;
    const childrenContainerRef = React.useRef<HTMLDivElement>(null);

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
            }}
        >
            <AppBar />
            <Divider color="cyan" />
            <Box
                ref={childrenContainerRef}
                sx={{
                    flex: 1,
                    overflow: "auto",
                }}
            >
                <ScrollToTop containerRef={childrenContainerRef} />
                {children}
            </Box>
        </Box>
    );
}

export { MainLayout };
