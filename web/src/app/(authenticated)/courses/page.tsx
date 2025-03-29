"use client";

import CourseCard from "@/components/shared/courses/courseCard";
import {
  Box,
  Group,
  Stack,
  Title,
  Text,
  TextInput,
  ActionIcon,
  SegmentedControl,
  Grid,
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import { useState } from "react";

const CoursePage = () => {
  const [activeTab, setActiveTab] = useState("All");
  return (
    <Stack mt="xl">
      <Group justify="space-between">
        <Box>
          <Title>Courses</Title>
          <Text c="gray">Browse and enroll in courses</Text>
        </Box>
        <Box>
          <Group gap="xs">
            <TextInput
              radius="md"
              placeholder="Search courses..."
              leftSection={<IconSearch size={16} />}
            />
            <ActionIcon variant="default" size="lg">
              <IconFilter
                style={{ width: "70%", height: "70%" }}
                stroke={1.5}
              />
            </ActionIcon>
          </Group>
        </Box>
      </Group>
      <SegmentedControl
        onChange={setActiveTab}
        value={activeTab}
        fullWidth
        radius="md"
        withItemsBorders={false}
        data={["All", "Enrolled", "Completed", "Recommended"]}
      />
      <Grid>
        <CourseCard />
      </Grid>
    </Stack>
  );
};

export default CoursePage;
