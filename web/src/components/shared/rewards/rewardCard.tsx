import { RewardCardValues } from "@/types/reward";
import { Button, Card, Group, Image, Text } from "@mantine/core";
import { IconMoneybag } from "@tabler/icons-react";

export default function RewardCard({ ...props }: RewardCardValues) {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder h={"100%"}>
            <Card.Section>
                <Image src={props.imageUrl} height={160} alt="Norway" />
            </Card.Section>
            <Text size="xl" fw={700} mt="md">
                {props.name}
            </Text>
            <Text size="sm" c="dimmed">
                {props.detail}
            </Text>
            <Group gap="xs" mt="md" justify="flex-end">
                <IconMoneybag size={16} />
                <Text size="sm" fw={700}>
                    {props.point} points
                </Text>
            </Group>

            <Button
                bg={props.isClaimed ? "dark.5" : ""}
                variant="filled"
                fullWidth
                mt="md"
                radius="md"
                disabled={props.isClaimed}
            >
                {props.isClaimed ? "Claimed" : "Claim Reward"}
            </Button>
        </Card>
    );
}
