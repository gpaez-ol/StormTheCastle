import { Box, Button, Center, Text, Title, Image, ScrollArea } from "@mantine/core";
import seamlessBlue from "assets/background.jpg";
import { SongSaleCard } from "modules/songs";
import nsgLogo from "assets/nsg-logo-compac.png";

function ArtistHome() {
    return (
        <><Box
            sx={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                height: "100%",
                backgroundImage: `url(${seamlessBlue})`,
                paddingTop: "50px",
                minHeight: 500,
                gap: "10px"
            }}

        >
            <Image fit="scale-down" src={nsgLogo} sx={{ maxWidth: 200, alignSelf: "center" }} />
            <Center>
                <Box>
                    <Title variant="gradient"
                        size={64}
                        gradient={{ from: 'white', to: '#00A5FF', deg: 45 }}
                        ta="center"
                        fz="xl"
                        fw={700}> Vault of Songs</Title>
                    <Text size={28} color="white" > What is the next project?</Text>
                </Box>
            </Center>
            <Box sx={{ display: "flex", minWidth: "20%", flexDirection: "row", alignSelf: "center", gap: "30px", paddingTop: 20 }}>
                <Button fullWidth bg="cyan" variant="filled" radius={"xl"} >
                    Create a Release
                </Button>
            </Box>
        </Box>
        </>
    );
}

export { ArtistHome };