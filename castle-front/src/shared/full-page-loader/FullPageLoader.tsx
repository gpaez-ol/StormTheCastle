import { Box, Loader } from "@mantine/core";

function FullPageLoader() {
    return (
        <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
            <Loader color="blue" sx={{ margin: "auto" }} />
        </Box>
    );
}

export { FullPageLoader };
