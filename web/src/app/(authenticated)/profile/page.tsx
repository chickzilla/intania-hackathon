"use client";
import CourseProgress from "@/components/shared/courses/courseProgress";
import BadgesDisplay from "@/components/ui/achievements/badgesDisplay";
import {
  Text,
  Avatar,
  Group,
  Paper,
  Stack,
  Pill,
  Flex,
  Center,
  Button,
  GridCol,
  Grid,
  SegmentedControl,
  Progress,
  Box,
  ActionIcon,
  Divider,
  useComputedColorScheme,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconCalendarWeek,
  IconCertificate2,
  IconCode,
  IconMail,
  IconMapPin,
  IconTrophy,
  IconWorld,
} from "@tabler/icons-react";
import { useState } from "react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("Stats");
  const darkMode = useComputedColorScheme() === "dark";
  return (
    <Stack>
      <Paper bg="red.8" radius="md" p="xl">
        <Flex direction={{ base: "column", sm: "row" }} gap="lg">
          <Center>
            <Avatar name="Walter White" size="xl" bg="white" />
          </Center>
          <Flex
            direction={{ base: "column", sm: "row" }}
            justify="space-between"
            w="100%"
            gap="lg"
          >
            <Stack gap="xs">
              <Flex
                direction="column"
                align={{ base: "center", sm: "flex-start" }}
              >
                <Text c="white" size="2rem" fw={700}>
                  John doe
                </Text>
                <Text c="white">Level 12 Explorer</Text>
              </Flex>
              <Center>
                <Group gap="xs">
                  <Pill bg="red" c="white">
                    &lt;Javascript&gt;
                  </Pill>
                  <Pill bg="red" c="white">
                    &lt;React&gt;
                  </Pill>
                  <Pill bg="red" c="white">
                    &lt;Node.js&gt;
                  </Pill>
                </Group>
              </Center>
            </Stack>
            <Center>
              <Button variant="white" c="red.8">
                Edit Profile
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Paper>
      <Grid>
        <GridCol span={{ base: 12, sm: 8 }}>
          <Stack>
            <SegmentedControl
              onChange={setActiveTab}
              value={activeTab}
              fullWidth
              radius="md"
              withItemsBorders={false}
              data={["Stats", "Achievements", "Courses"]}
            />
            {activeTab === "Stats" && (
              <>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    Overview
                  </Text>
                  <Text c="gray">Your learning statistics</Text>
                  <Grid my="lg" gutter="xs">
                    <GridCol span={{ base: 12, md: 4 }}>
                      <Paper bg={darkMode ? "dark.6" : "gray.1"} p="lg">
                        <Stack gap={0}>
                          <Center>
                            <Text size="2rem" fw={700} c="red.8">
                              24
                            </Text>
                          </Center>
                          <Center>
                            <Text c="gray" size="sm">
                              Courses Completed
                            </Text>
                          </Center>
                        </Stack>
                      </Paper>
                    </GridCol>
                    <GridCol span={{ base: 12, xs: 6, md: 4 }}>
                      <Paper bg={darkMode ? "dark.6" : "gray.1"} p="lg">
                        <Stack gap={0}>
                          <Center>
                            <Text size="2rem" fw={700} c="red.8">
                              156
                            </Text>
                          </Center>
                          <Center>
                            <Text c="gray" size="sm">
                              Hours Spent
                            </Text>
                          </Center>
                        </Stack>
                      </Paper>
                    </GridCol>
                    <GridCol span={{ base: 12, xs: 6, md: 4 }}>
                      <Paper bg={darkMode ? "dark.6" : "gray.1"} p="lg">
                        <Stack gap={0}>
                          <Center>
                            <Text size="2rem" fw={700} c="red.8">
                              #42
                            </Text>
                          </Center>
                          <Center>
                            <Text c="gray" size="sm">
                              Global Rank
                            </Text>
                          </Center>
                        </Stack>
                      </Paper>
                    </GridCol>
                  </Grid>
                  <Text>Level Progress</Text>
                  <Group justify="space-between">
                    <Text c="gray" size="xs">
                      XP: 1,240/2,000
                    </Text>
                    <Text c="gray" size="xs">
                      Level 13
                    </Text>
                  </Group>
                  <Progress color="red.8" value={50} />
                </Paper>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    Activity
                  </Text>
                  <Text c="gray">Your recent learning activity</Text>
                </Paper>
              </>
            )}
            {activeTab === "Achievements" && (
              <>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    Badges
                  </Text>
                  <Text c="gray">Badges you've earned</Text>
                  <Grid gutter="sm" pt="sm">
                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"JavaScript Ninja"}
                        icon={<IconCode />}
                        color="yellow"
                      />
                    </GridCol>

                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"React Master"}
                        icon={<IconCode />}
                        color="blue"
                      />
                    </GridCol>
                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"Fast Learner"}
                        icon={<IconCertificate2 />}
                        color="green"
                      />
                    </GridCol>
                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"Problem Solver"}
                        icon={<IconTrophy />}
                        color="purple"
                      />
                    </GridCol>
                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"Team Player"}
                        icon={<IconTrophy />}
                        color="red"
                      />
                    </GridCol>
                    <GridCol span={{ base: 6, xs: 4, md: 3 }}>
                      <BadgesDisplay
                        label={"Early Bird"}
                        icon={<IconCertificate2 />}
                        color="orange"
                      />
                    </GridCol>
                  </Grid>
                </Paper>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    Certificates
                  </Text>
                  <Text c="gray">Your earned certificates</Text>
                </Paper>
              </>
            )}
            {activeTab === "Courses" && (
              <>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    Completed Courses
                  </Text>
                  <Text c="gray">Courses you've finished</Text>
                  <Stack mt="sm">
                    <CourseProgress
                      course_name="JavaScript Fundamentals"
                      modules={12}
                      date="Jan 2023"
                      progress={100}
                    />
                    <CourseProgress
                      course_name="React Development"
                      modules={8}
                      date="Mar 2023"
                      progress={100}
                    />
                    <CourseProgress
                      course_name="Node.js Basics"
                      modules={10}
                      date="May 2023"
                      progress={100}
                    />
                  </Stack>
                </Paper>
                <Paper p="lg" radius="lg" withBorder>
                  <Text size="2rem" fw={700}>
                    In Progress
                  </Text>
                  <Text c="gray">Courses you're currently taking</Text>
                  <Stack mt="sm">
                    <CourseProgress
                      course_name="JavaScript Fundamentals"
                      modules={12}
                      progress={75}
                    />
                    <CourseProgress
                      course_name="React Development"
                      modules={8}
                      progress={40}
                    />
                  </Stack>
                </Paper>
              </>
            )}
          </Stack>
        </GridCol>
        <GridCol span={{ base: 12, sm: 4 }}>
          <Stack>
            <Paper p="lg" radius="lg" withBorder>
              <Stack>
                <Text size="2rem" fw={700}>
                  About
                </Text>
                <Text>
                  Frontend developer passionate about creating beautiful and
                  functional user interfaces. Always learning and exploring new
                  technologies.
                </Text>
                <Stack gap="xs">
                  <Box>
                    <Center inline>
                      <IconMapPin size={16} color="gray" />
                      <Text ml={5}>San Francisco, CA</Text>
                    </Center>
                  </Box>
                  <Box>
                    <Center inline>
                      <IconMail size={16} color="gray" />
                      <Text ml={5}>john.doe@example.com</Text>
                    </Center>
                  </Box>
                  <Box>
                    <Center inline>
                      <IconCalendarWeek size={16} color="gray" />
                      <Text ml={5}>Joined September 2022</Text>
                    </Center>
                  </Box>
                </Stack>
                <Divider />
                <Group>
                  <ActionIcon variant="default" size="lg" radius="xl">
                    <IconBrandGithub
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="default" size="lg" radius="xl">
                    <IconBrandLinkedin
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="default" size="lg" radius="xl">
                    <IconBrandX
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                  <ActionIcon variant="default" size="lg" radius="xl">
                    <IconWorld
                      style={{ width: "70%", height: "70%" }}
                      stroke={1.5}
                    />
                  </ActionIcon>
                </Group>
              </Stack>
            </Paper>
            <Paper p="lg" radius="lg" withBorder>
              <Text size="2rem" fw={700}>
                Leaderboard
              </Text>
              <Text c="gray">Your ranking</Text>
              <Paper bg={darkMode ? "dark.6" : "gray.1"} p="lg" my="sm">
                <Stack gap={0}>
                  <Center>
                    <Text size="2rem" fw={700} c="red.8">
                      #42
                    </Text>
                  </Center>
                  <Center>
                    <Text c="gray" size="sm">
                      Global Rank
                    </Text>
                  </Center>
                </Stack>
              </Paper>
              <Stack gap="xs">
                <Paper p="sm" radius="lg" withBorder>
                  <Group justify="space-between" w="100%">
                    <Group>
                      <ThemeIcon
                        variant="default"
                        size="lg"
                        radius="xl"
                        bg="red.8"
                        c="white"
                      >
                        41
                      </ThemeIcon>
                      <Text>Sarah Johnson</Text>
                    </Group>
                    <Text>1,260 EXP</Text>
                  </Group>
                </Paper>
                <Paper p="sm" radius="lg" withBorder>
                  <Group justify="space-between" w="100%">
                    <Group>
                      <ThemeIcon
                        variant="default"
                        size="lg"
                        radius="xl"
                        bg="red.8"
                        c="white"
                      >
                        42
                      </ThemeIcon>
                      <Text>You</Text>
                    </Group>
                    <Text>1,240 EXP</Text>
                  </Group>
                </Paper>
                <Paper p="sm" radius="lg" withBorder>
                  <Group justify="space-between" w="100%">
                    <Group>
                      <ThemeIcon
                        variant="default"
                        size="lg"
                        radius="xl"
                        bg="red.8"
                        c="white"
                      >
                        43
                      </ThemeIcon>
                      <Text>Mike Chen</Text>
                    </Group>
                    <Text>1,235 EXP</Text>
                  </Group>
                </Paper>
              </Stack>
            </Paper>
          </Stack>
        </GridCol>
      </Grid>
    </Stack>
  );
};

export default ProfilePage;
