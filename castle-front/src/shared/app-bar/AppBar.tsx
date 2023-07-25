import { ActionIcon, Box, Group, Text, Image } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useAuthentication } from "../../contexts";
import nsgLogo from "assets/nsg-logo-compac.png";

type NavigationItem = {
    name: string;
    to: string;
    color?: string;
    isOutsideLink: boolean;
};

const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        name: "About",
        to: "/about",
        isOutsideLink: false,
    },
    {
        name: "Join the gang",
        to: "https://www.instagram.com/neverstopgang/",
        color: "#00A5FF",
        isOutsideLink: true,
    },
];

function AppBar() {
    const { authorized } = useAuthentication();
    const isMobile = useMediaQuery("(max-width: 820px)");

    return (
        <Box
            sx={{
                padding: "8px 40px",
                display: "flex",
                alignItems: "center",
                width: "100vw",
                height: 56,
                backgroundColor: "white",
            }}
        >
            <Box sx={{ flex: 1 }} component={Link} to="/home">
                <Image fit="scale-down" src={nsgLogo} sx={{ maxWidth: 60 }} />
            </Box>
            <Box sx={{ display: "flex" }}>
                {!isMobile && (
                    <Group spacing={20}>
                        {NAVIGATION_ITEMS.map(({ name, to, color, isOutsideLink }) => (
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            <>
                                {isOutsideLink ? (
                                    <Text
                                        key={`${name}a`}
                                        component="a"
                                        href={to}
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "15",
                                            textDecoration: "none",
                                            color: color ?? "black",
                                        }}
                                    >
                                        {name}
                                    </Text>
                                ) : (
                                    <Text
                                        key={`${name}a`}
                                        component={Link}
                                        to={to}
                                        sx={{
                                            fontWeight: "bold",
                                            fontSize: "15",
                                            textDecoration: "none",
                                            color: color ?? "black",
                                        }}
                                    >
                                        {name}
                                    </Text>
                                )}
                            </>
                        ))}
                    </Group>
                )}
                {authorized && (
                    <Group spacing={24} sx={{ marginLeft: 32 }}>
                        {!isMobile && (
                            <Box
                                key="create-certificate"
                                component={Link}
                                to="/create-certificate/form/basic-info"
                                sx={{
                                    width: 192,
                                    height: 40,
                                    fontWeight: "bold",
                                    fontSize: 15,
                                    borderRadius: 24,
                                    display: "flex",
                                    alignItems: "center",
                                    border: "2px solid #000000",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    color: "black",
                                }}
                            >
                                <Text>Create a release</Text>
                            </Box>
                        )}
                    </Group>
                )}

                {!authorized && (
                    <Group spacing={24} sx={{ marginLeft: 50 }}>
                        <Box
                            key="login"
                            component={Link}
                            to="/login"
                            sx={{
                                width: 104,
                                height: 40,
                                backgroundColor: "#00A5FF",
                                color: "white",
                                padding: 0,
                                borderRadius: "24px",
                                fontSize: 15,
                                textAlign: "center",
                                textDecoration: "none",
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Text>Login</Text>
                        </Box>
                    </Group>
                )}
            </Box>
        </Box>
    );
}

export { AppBar };
