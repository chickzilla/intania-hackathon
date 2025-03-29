import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import LandingLayout from "@/components/layout/AppShell/landingLayout";
import { theme } from "@/theme";
import { Notifications } from "@mantine/notifications";

export const metadata = {
  title: "Scuola",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Notifications />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
