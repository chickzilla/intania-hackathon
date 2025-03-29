"use client";
import { AppShell, useComputedColorScheme, Box } from "@mantine/core";

import AuthenticatedHeader from "@/components/layout/Header/authenticatedHeader";
import AppLayout from "@/components/layout/AppShell/appLayout";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default AuthenticatedLayout;
