import LandingLayout from "@/components/layout/AppShell/landingLayout";
import {
  Button,
  Center,
  Grid,
  GridCol,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconArrowRight,
  IconBook,
  IconCertificate2,
  IconCheck,
  IconCode,
  IconDeviceGamepad,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";

export default function Home() {
  return (
    <LandingLayout>
      <main>
        <section>
          <Grid>
            <GridCol h="95vh" span={{ base: 12, md: 6 }}>
              <Stack h="100%" align="stretch" justify="center" gap="md">
                <Group gap={0}>
                  <Title size={60}>Learn,</Title>
                  <Title size={60}>Compete,</Title>
                  <Title size={60} c="red.8">
                    Level Up
                  </Title>
                </Group>
                <Text>
                  Scuola transforms education through gamification. Master new
                  skills, compete in challenges, and climb the global
                  leaderboard.
                </Text>
                <Group>
                  <Button
                    color="red.8"
                    rightSection={<IconArrowRight size={14} />}
                  >
                    Start Learning Now
                  </Button>
                  <Button variant="default">Explore Features</Button>
                </Group>
                <Group>
                  <Center inline>
                    <IconCheck color="#51cf66" size={20} />
                    <Text c="gray" size="sm">
                      10,000+ Students
                    </Text>
                  </Center>
                  <Center inline>
                    <IconCheck color="#51cf66" size={20} />
                    <Text c="gray" size="sm">
                      200+ Courses
                    </Text>
                  </Center>
                  <Center inline>
                    <IconCheck color="#51cf66" size={20} />
                    <Text c="gray" size="sm">
                      50+ Competitions
                    </Text>
                  </Center>
                </Group>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 6 }}>
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Scuola Platform"
              />
            </GridCol>
          </Grid>
        </section>
        <section>
          <Stack>
            <Center>
              <Title>Platform Features</Title>
            </Center>
            <Center>
              <Text c="gray" mb="xl">
                Scuola combines education with gamification to create an
                engaging learning experience
              </Text>
            </Center>
            <Grid grow gutter="xl">
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconBook style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Interactive Courses
                  </Text>
                  <Text c="gray">
                    Engage with interactive content, quizzes, and hands-on
                    projects designed by industry experts.
                  </Text>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconTrophy style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Competitive Challenges
                  </Text>
                  <Text c="gray">
                    Test your skills in time-bound competitions and hackathons
                    with real-world problems and prizes.
                  </Text>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconCertificate2 style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Achievement System
                  </Text>
                  <Text c="gray">
                    Earn badges, certificates, and level up as you progress
                    through courses and win competitions.
                  </Text>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconUsers style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Global Community
                  </Text>
                  <Text c="gray">
                    Connect with learners worldwide, collaborate on projects,
                    and share knowledge in our community forums.
                  </Text>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconCode style={{ width: "70%", height: "70%" }} />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Practical Projects
                  </Text>
                  <Text c="gray">
                    Build your portfolio with real-world projects that
                    demonstrate your skills to potential employers.
                  </Text>
                </Paper>
              </GridCol>
              <GridCol span={{ base: 12, sm: 6, md: 4 }}>
                <Paper p="lg" radius="md" shadow="sm" mih="10rem" h="100%">
                  <ThemeIcon
                    variant="light"
                    size="xl"
                    radius="xl"
                    color="red"
                    mb="sm"
                  >
                    <IconDeviceGamepad
                      style={{ width: "70%", height: "70%" }}
                    />
                  </ThemeIcon>
                  <Text size="xl" fw={700}>
                    Gamified Learning
                  </Text>
                  <Text c="gray">
                    Experience education as a game with points, levels,
                    leaderboards, and rewards that keep you motivated.
                  </Text>
                </Paper>
              </GridCol>
            </Grid>
          </Stack>
        </section>
      </main>
    </LandingLayout>
  );
}
