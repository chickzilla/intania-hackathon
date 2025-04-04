"use client";

import ThemeToggle from "@/components/ui/actionIcons/themeToggle";
import { Box, Button, Center } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <>
      <Button
        pos="absolute"
        top={16}
        left={16}
        variant="subtle"
        color="white"
        onClick={() => {
          router.push("/");
        }}
        leftSection={<IconArrowLeft size={20} />}
      >
        Back to Home
      </Button>

      <Box pos="absolute" top={16} right={16}>
        <ThemeToggle />
      </Box>
      <Center h="100vh" w="100vw" bg="red.8">
        {children}
      </Center>
    </>
  );
}
