"use client";

import AppLayout from "@/components/layout/AppShell/appLayout";

const AuthenticatedLayout = ({ children }: { children: React.ReactNode }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default AuthenticatedLayout;
