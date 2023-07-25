import { Box, Button, Card, Image, Group, Stack, Text, Title, Badge, Center } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import songCover from "assets/infierno-cover.png";

type SongSaleCardProps = {
    id: string;
    name: string;
    description: string;
};

function SongSaleCard(props: SongSaleCardProps) {
    const navigate = useNavigate();
    const {
        id,
        name,
        description
    } = props;
    // const goToDetails = () => {
    //     navigate(`/SongSale-details/${id}`);
    // };
    return (
        <Card shadow="lg" sx={{ boxShadow: "0px 2px 2px #00000029", }} padding="lg" radius="md" withBorder maw={380} >
            <Card.Section>
                <Image
                    fit="scale-down"
                    src={songCover}
                    height={"85%"}
                    alt="Norway"
                />
            </Card.Section>
            <Group position="apart" mt="md" mb="xs">
                <Text weight={500} >{name}</Text>
                <Badge color="pink" variant="light">
                    Disponible
                </Badge>
            </Group>

            <Text size="sm" color="black">
                {description}
            </Text>
        </Card>
    )
}

export { SongSaleCard };
