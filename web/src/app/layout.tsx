import "@mantine/core/styles.css";

import {
    ColorSchemeScript,
    MantineProvider,
    mantineHtmlProps,
} from "@mantine/core";
import LandingLayout from "@/components/layout/AppShell/landingLayout";
import { theme } from "@/theme";

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
                <MantineProvider theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    );
}
