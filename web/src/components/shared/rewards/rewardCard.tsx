import claimReward from "@/services/reward/claimReward";
import addPoint from "@/services/user/addPoint";
import { RewardCardValues } from "@/types/reward";
import { Button, Card, Group, Image, Text } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconMoneybag } from "@tabler/icons-react";

const token = sessionStorage.getItem("jwt_token") || "";
const userPoint = sessionStorage.getItem("point") || 0;

export default function RewardCard({ ...props }: RewardCardValues) {
    const handleClaimReward = () => {
        if (props.point > Number(userPoint)) {
            notifications.show({
                title: "Not enough points",
                message: "You don't have enough points to claim this reward",
                color: "red",
            });
            return;
        }

        claimReward(token, props.id, props.point)
            .then((res) => {
                const updatedPoint = Number(userPoint) - props.point;
                sessionStorage.setItem("point", updatedPoint.toString());

                addPoint(-props.point, token);

                notifications.show({
                    title: "Claim successful",
                    message: "You have successfully claimed the reward",
                    color: "green",
                });

                window.location.href = "/rewards";
            })
            .catch((err) => {
                console.log(err);
                notifications.show({
                    title: "Something went wrong",
                    message: err.message || "Claim rewards failed",
                    color: "red",
                });
            });
    };
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder h={"100%"}>
            <Card.Section>
                <Image src={props.imageUrl} height={160} alt="Norway" />
            </Card.Section>
            <Text size="xl" fw={700} mt="md">
                {props.name}
            </Text>
            <Text size="sm" c="dimmed" lineClamp={1}>
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
                onClick={handleClaimReward}
            >
                {props.isClaimed ? "Claimed" : "Claim Reward"}
            </Button>
        </Card>
    );
}
