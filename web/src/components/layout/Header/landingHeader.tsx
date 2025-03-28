"use client";
import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import { Group, Center, Button, Text } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconDeviceGamepad2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const LandingHeader = () => {
  const router = useRouter();
  const section1 = useScrollIntoView<HTMLDivElement>({ duration: 500 });
  const section2 = useScrollIntoView<HTMLDivElement>({ duration: 500 });
  const section3 = useScrollIntoView<HTMLDivElement>({ duration: 500 });

  return (
    <Group h="100%" px="xl" justify="space-between">
      <Center inline>
        <IconDeviceGamepad2
          style={{ width: "1.5em", height: "1.5em" }}
          stroke={1.5}
          color="red"
        />
        <Text ml="xs" size="lg" fw={700}>
          Scuola
        </Text>
      </Center>

      <Group>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => section1.scrollIntoView({ alignment: "start" })}
          visibleFrom="sm"
        >
          Features
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => section2.scrollIntoView({ alignment: "start" })}
          visibleFrom="sm"
        >
          How it works
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={() => section3.scrollIntoView({ alignment: "start" })}
          visibleFrom="sm"
        >
          Testimonials
        </Text>
        <ThemeToggle />
        <Button
          variant="default"
          radius="md"
          visibleFrom="xs"
          onClick={() => {
            router.push("/login");
          }}
        >
          Log in
        </Button>
        <Button
          variant="filled"
          color="red.8"
          radius="md"
          visibleFrom="xs"
          onClick={() => {
            router.push("/register");
          }}
        >
          Get Started
        </Button>
      </Group>
    </Group>
  );
};

export default LandingHeader;
