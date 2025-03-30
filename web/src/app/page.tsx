"use client";
import LandingLayout from "@/components/layout/AppShell/landingLayout";
import CommentCard from "@/components/ui/commentCard";
import {
  Button,
  Center,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  Paper,
  Stack,
  Stepper,
  StepperStep,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useScrollIntoView } from "@mantine/hooks";
import {
  IconArrowRight,
  IconBook,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconCertificate2,
  IconCheck,
  IconCircleCheck,
  IconCode,
  IconDeviceGamepad,
  IconDeviceGamepad2,
  IconTrophy,
  IconUsers,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState(1);
  const router = useRouter();

  const section1 = useScrollIntoView({ duration: 800, offset: 150 });
  const section2 = useScrollIntoView({ duration: 800, offset: 150 });
  const section3 = useScrollIntoView({ duration: 800, offset: 150 });

  return (
    <LandingLayout
      scrollToSection1={section1.scrollIntoView}
      scrollToSection2={section2.scrollIntoView}
      scrollToSection3={section3.scrollIntoView}
    >
      <main>
        <Container fluid>
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
                    onClick={() => router.push("/register")}
                  >
                    Start Learning Now
                  </Button>
                  <Button
                    variant="default"
                    onClick={() => router.push("/login")}
                  >
                    Explore Features
                  </Button>
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
              <Center pt={"5rem"}>
                <IconDeviceGamepad2
                  style={{ width: "20rem", height: "20rem" }}
                  stroke={1.5}
                  color="#fa5252"
                />
              </Center>
              <Text ml="xs" size="5rem" fw={700} ta={"center"}>
                Scuola
              </Text>
            </GridCol>
          </Grid>
        </Container>
        <Container fluid ref={section1.targetRef}>
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
        </Container>
        <Container fluid mt="10rem" ref={section2.targetRef}>
          <Stack>
            <Center>
              <Title>How It Works</Title>
            </Center>
            <Center>
              <Text c="gray">
                Start your learning journey in just a few simple steps
              </Text>
            </Center>
          </Stack>
          <Stepper
            active={active}
            onStepClick={setActive}
            completedIcon={<IconCircleCheck size={35} />}
            iconSize={100}
            my="5rem"
            color="red"
          >
            <StepperStep label="Step 1" description="Create account" />
            <StepperStep label="Step 2" description="Explore Courses" />
            <StepperStep
              label="Step 3"
              description="Learn & Practices"
            ></StepperStep>
            <StepperStep
              label="Step 4"
              description="Compete & Earn"
            ></StepperStep>
          </Stepper>
        </Container>
        <Container fluid mt="10rem" ref={section3.targetRef}>
          <Center>
            <Title>What Our Users Say</Title>
          </Center>
          <Center>
            <Text c="gray">
              Hear from students who have transformed their learning experience
              with Scuola
            </Text>
          </Center>
          <Grid gutter="xl" my="5rem">
            <GridCol span={{ base: 12, md: 4 }}>
              <CommentCard
                name="Sarah Johnson"
                role="Web Developer"
                comment="Scuola transformed how I learn programming. The gamification elements kept me motivated, and the competitions helped me apply my skills in real-world scenarios. I landed my dream job thanks to the portfolio I built here!"
              />
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <CommentCard
                name="Michael Chen"
                role="Data Scientist"
                comment="The competitive aspect of Scuola is what sets it apart. Participating in data science challenges pushed me to improve my skills rapidly. The community is incredibly supportive and the learning resources are top-notch."
              />
            </GridCol>
            <GridCol span={{ base: 12, md: 4 }}>
              <CommentCard
                name="Emily Rodriguez"
                role="UX Designer"
                comment="As someone who learns by doing, Scuola's project-based approach was perfect for me. The feedback from instructors and peers helped me improve my design skills, and the badges I earned gave me a sense of accomplishment."
              />
            </GridCol>
          </Grid>
        </Container>
        <Container fluid mt="10rem">
          <Paper
            bg="red.8"
            py="5rem"
            mx={{ base: "1rem", xs: "2rem", sm: "3rem", md: "4rem" }}
            radius="lg"
          >
            <Stack mx={{ base: "1rem", xs: "2rem", sm: "3rem", md: "4rem" }}>
              <Center>
                <Title c="white">Ready to Start Your Learning Journey?</Title>
              </Center>
              <Center>
                <Text c="white" size="xl">
                  Join thousands of learners who are mastering new skills,
                  competing in challenges, and advancing their careers with
                  Scuola.
                </Text>
              </Center>
              <Center>
                <Button
                  rightSection={<IconArrowRight />}
                  size="md"
                  variant="white"
                  color="red.8"
                  onClick={() => router.push("/register")}
                >
                  Get Started Now
                </Button>
              </Center>
            </Stack>
          </Paper>
        </Container>
        <Divider my="5rem" />
        <Container fluid>
          <Grid mx={{ base: "1rem", xs: "2rem", sm: "3rem", md: "4rem" }}>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap="xs">
                <Group gap="xs">
                  <IconDeviceGamepad2 color="red" />
                  <Text fw={900} size="xl">
                    Scuola
                  </Text>
                </Group>
                <Text c="gray">
                  The ultimate educational gaming platform that transforms how
                  you learn and compete.
                </Text>
                <Group gap="xs" c="gray">
                  <IconBrandFacebook />
                  <IconBrandX />
                  <IconBrandInstagram />
                  <IconBrandLinkedin />
                </Group>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap="xs">
                <Text fw={700} size="lg">
                  Platform
                </Text>
                <Stack c="gray" gap="5">
                  <Text>Courses</Text>
                  <Text>Competitions</Text>
                  <Text>Leaderboard</Text>
                  <Text>Community</Text>
                  <Text>Partnerships</Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap="xs">
                <Text fw={700} size="lg">
                  Company
                </Text>
                <Stack c="gray" gap="5">
                  <Text>About Us</Text>
                  <Text>Careers</Text>
                  <Text>Blog</Text>
                  <Text>Press</Text>
                  <Text>Contact</Text>
                </Stack>
              </Stack>
            </GridCol>
            <GridCol span={{ base: 12, md: 3 }}>
              <Stack gap="xs">
                <Text fw={700} size="lg">
                  Legal
                </Text>
                <Stack c="gray" gap="5">
                  <Text>Term of Services</Text>
                  <Text>Privacy Policy</Text>
                  <Text>Cookie Policy</Text>
                  <Text>GDPR</Text>
                  <Text>Accessibility</Text>
                </Stack>
              </Stack>
            </GridCol>
          </Grid>
        </Container>
        <Divider mt="5rem" />
        <Container fluid mt="2rem">
          <Center>
            <Text c="gray" size="sm">
              © 2025 Scuola. All rights reserved.
            </Text>
          </Center>
        </Container>
      </main>
    </LandingLayout>
  );
}
