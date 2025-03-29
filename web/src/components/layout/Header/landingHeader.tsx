"use client";
import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import { Group, Center, Button, Text } from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import { IconDeviceGamepad2 } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

const LandingHeader = ({
  scrollToSection1,
  scrollToSection2,
  scrollToSection3,
}: {
  scrollToSection1: () => void;
  scrollToSection2: () => void;
  scrollToSection3: () => void;
}) => {
  const router = useRouter();

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
          onClick={scrollToSection1}
          visibleFrom="sm"
        >
          Features
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={scrollToSection2}
          visibleFrom="sm"
        >
          How it works
        </Text>
        <Text
          style={{ cursor: "pointer" }}
          onClick={scrollToSection3}
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
