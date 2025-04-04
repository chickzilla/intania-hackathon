"use client";
import { formatDate } from "@/functions/dateFormat";
import { COURSE_STATUS } from "@/enum/course/courseStatus";
import { CompetitionsDetails } from "@/interfaces/listCompetitions";
import { CourseDetails } from "@/interfaces/listCouses";
import { Card, Image, Text, Stack, Group, Badge, Button } from "@mantine/core";
import { IconAward } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { notifications } from "@mantine/notifications";
import register from "@/services/contest/register";
import addPoint from "@/services/user/addPoint";

type CardProps = {
  courseData?: CourseDetails;
  competitionData?: CompetitionsDetails;
  onEnroll?: (e: string) => void;
  onComplete?: (e: string) => void;
  onRegister?: (e: string) => void;
};

export default function MiniCard(props: CardProps) {
  const currentDate = new Date().toISOString();
  const course = props.courseData;
  const competition = props.competitionData;
  const [isFetching, setIsFetching] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleRegister = async () => {
    setIsFetching(true);
    const user_token = sessionStorage.getItem("jwt_token");
    const competitionId = competition?.id;
    if (!user_token || !competitionId) {
      notifications.show({
        title: "Error",
        message: "Please login to register for the competition.",
        color: "red",
      });
      return;
    }

    register(competitionId, "REGISTERED", user_token)
      .then(() => {
        notifications.show({
          title: "Success",
          message: "Successfully registered for the competition.",
          color: "green",
        });
        props.onRegister?.(competitionId);
        setIsRegistered(true);
      })
      .catch((error) => {
        notifications.show({
          title: "Error",
          message: error.message || "Failed to register for the competition.",
          color: "red",
        });
      })
      .finally(() => {
        setIsFetching(false);
      });
  };

  const handleFinish = async () => {
    setIsFetching(true);
    const user_token = sessionStorage.getItem("jwt_token");
    const competitionId = competition?.id;
    if (!user_token || !competitionId) {
      notifications.show({
        title: "Error",
        message: "Please login to finish the competition.",
        color: "red",
      });
      return;
    }
    register(competitionId, "FINISHED", user_token).then(() => {
      addPoint(competition?.point, user_token, competition?.rankingPoint || 0)
        .then(() => {
          notifications.show({
            title: "Success",
            message: "Successfully finished the competition.",
            color: "green",
          });
          props.onRegister?.(competitionId);
          setIsFinished(true);
          const oldPoints = window.sessionStorage.getItem("point") || "0";
          const newPoints = parseInt(oldPoints) + competition?.point;

          const oldRankPoint =
            window.sessionStorage.getItem("rankingPoint") || "0";
          const newRankPoint =
            parseInt(oldRankPoint) + competition?.rankingPoint;

          window.sessionStorage.setItem("point", newPoints.toString());
          window.sessionStorage.setItem(
            "rankingPoint",
            newRankPoint.toString()
          );
          window.location.reload();
        })
        .catch((error) => {
          notifications.show({
            title: "Error",
            message: error.message || "Failed to finish the competition.",
            color: "red",
          });
        })
        .finally(() => {
          setIsFetching(false);
        });
    });
  };

  return (
    <>
      {course ? (
        <Stack>
          <Card withBorder radius="md" p="md" w={250}>
            {/* TODO: Real Image */}
            <Image
              src="/img/scroll.jpg"
              height={120}
              radius="md"
              alt="Course Image"
            />

            <Stack mt="sm" gap={4}>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Instructor:
                </Text>
                <Text size="sm" fw={600}>
                  {course.instructor.name}
                </Text>
              </Group>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Points:
                </Text>
                <Text size="sm" fw={600}>
                  {course.point}
                </Text>
              </Group>
              {course?.achievements.map((achievement) => (
                <Badge
                  key={achievement}
                  variant="light"
                  leftSection={<IconAward size={14} />}
                  size="sm"
                  mt="xs"
                  radius="sm"
                >
                  {achievement}
                </Badge>
              ))}
            </Stack>
          </Card>
          {course.status === COURSE_STATUS.AVAILABLE ? (
            <Button
              fullWidth
              mt="md"
              radius="md"
              onClick={() => {
                props.onEnroll?.(course.id);
              }}
            >
              Enroll Now
            </Button>
          ) : course.status === COURSE_STATUS.ENROLLED ? (
            <Button
              fullWidth
              mt="md"
              radius="md"
              onClick={() => {
                props.onComplete?.(course.id);
              }}
            >
              Complete Course
            </Button>
          ) : (
            <></>
          )}
        </Stack>
      ) : competition ? (
        // TODO: Implement Competition
        <Stack>
          <Card withBorder radius="md" p="md" w={250}>
            {/* TODO: Real Image */}
            <Image
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
              height={120}
              radius="md"
              alt="Competition Image"
            />

            <Stack mt="sm" gap={4}>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Start Date:
                </Text>
                <Text size="sm" fw={600}>
                  {formatDate(competition.startDate)}
                </Text>
              </Group>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  End Date:
                </Text>
                <Text size="sm" fw={600}>
                  {formatDate(competition.endDate)}
                </Text>
              </Group>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Organizer:
                </Text>
                <Text size="sm" fw={600}>
                  {competition.organizer.name}
                </Text>
              </Group>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Points:
                </Text>
                <Text size="sm" fw={600}>
                  {competition.point}
                </Text>
              </Group>
              <Group gap="xs">
                <Text size="sm" c="dimmed" fw={500}>
                  Ranking Points:
                </Text>
                <Text size="sm" fw={600}>
                  {competition.point}
                </Text>
              </Group>
            </Stack>
          </Card>
          {currentDate > competition.endDate ? null : (
            <>
              {!competition.isRegistered && !isRegistered ? (
                <Button
                  fullWidth
                  mt="md"
                  radius="md"
                  onClick={handleRegister}
                  loading={isFetching}
                >
                  Register Now
                </Button>
              ) : (
                <>
                  <Button fullWidth mt="md" radius="md" color="gray" disabled>
                    Registered
                  </Button>
                  <Button
                    fullWidth
                    mt="xs"
                    radius="md"
                    color="green"
                    onClick={handleFinish}
                    loading={isFetching}
                    disabled={isFinished}
                  >
                    Finish Competition
                  </Button>
                </>
              )}
            </>
          )}
        </Stack>
      ) : (
        <></>
      )}
    </>
  );
}
