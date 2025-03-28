export const metadata = {
  //   title: "My Mantine app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <body>{children}</body>;
}
