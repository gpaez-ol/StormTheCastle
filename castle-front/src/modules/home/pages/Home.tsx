import { Box, Button, Center, Text, Title, Image, ScrollArea } from "@mantine/core";
import seamlessBlue from "assets/background.jpg";
import { SongSaleCard } from "modules/songs";
import nsgLogo from "assets/nsg-logo-compac.png";

function Home() {
    return (
        <><Box
            sx={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
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
                        fw={700}> Own your music collection</Title>
                    <Text size={28} color="white" > Support the artists you love and benefit from the success together.</Text>
                </Box>
            </Center>
            <Box sx={{ display: "flex", flexDirection: "row", alignSelf: "center", gap: "30px", paddingTop: 20 }}>
                <Button placeholder="Start now" bg="cyan" variant="filled" radius={"xl"}>
                    Start Now
                </Button>
                <Button placeholder="Learn more" variant="outline" radius={"xl"}>
                    Learn More
                </Button>
            </Box>
        </Box>
            <Center>
                <Box>
                    <Title variant="gradient"
                        size={64}
                        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                        ta="center"
                        fz="xl"
                        fw={700}> Song Sales</Title>
                </Box>
            </Center>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, 496px)",
                    gap: 32,
                    justifyContent: "center",
                    margin: "48px auto 0",
                    maxWidth: "100%",
                    paddingBottom: "160px",
                }}
            >
                <Center>
                    <SongSaleCard key="12345" name="Infierno Remix" description="El remix de infierno un nuevo hit" id="123465" />
                </Center>
            </Box>

        </>
    );
}

export { Home };