import { ActionIcon } from "@mantine/core";
import { IconMoneybag } from "@tabler/icons-react";
import { useState } from "react";

type PointToggleProps = {
    toggle: () => void;
};

export default function PointToggle(props: PointToggleProps) {
    const { toggle } = props;

    const [toggled, setToggled] = useState(false);

    const handleClick = () => {
        setToggled((prev) => !prev);
        toggle();
    };
    return (
        <ActionIcon
            onClick={handleClick}
            variant={toggled ? "filled" : "default"}
            radius="lg"
            size="lg"
        >
            <IconMoneybag style={{ width: "50%", height: "50%" }} stroke={2} />
        </ActionIcon>
    );
}
