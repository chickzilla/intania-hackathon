"use client";
import { AppShell, useComputedColorScheme, Box } from "@mantine/core";

import AuthenticatedHeader from "@/components/layout/Header/authenticatedHeader";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
    const darkMode = useComputedColorScheme() === "dark";

    return (
        <Box bg={darkMode ? "dark.6" : "gray.0"}>
            <AppShell header={{ height: 60 }} padding="xl">
                <AppShell.Header>
                    <AuthenticatedHeader />
                </AppShell.Header>
                <AppShell.Main>{children}</AppShell.Main>
            </AppShell>
        </Box>
    );
};

export default AuthenticatedLayout;
