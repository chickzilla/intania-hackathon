"use client";

import getLeaderBoard from "@/services/rank/getLeaderboard";
import { User } from "@/types/user";
import {
  ScrollArea,
  Stack,
  Table,
  Title,
  Text,
  TableCaption,
  TableTbody,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useEffect, useState } from "react";

export default function LeaderBoard() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      getLeaderBoard()
        .then((res) => {
          setUsers(res.result);
        })
        .catch((err) => {
          console.log(err);
          notifications.show({
            title: "Error",
            message: err.message || "Failed to fetch leaderboard",
            color: "red",
          });
        });
    };
    fetchData();
  }, []);

  const rows = users.map((user, index) => (
    <tr key={user.ID}>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        {index + 1}
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        {user.FullName}
      </td>
      <td style={{ textAlign: "center", verticalAlign: "middle" }}>
        {user.RankPoint}
      </td>
    </tr>
  ));

  return (
    <Stack px="xl" pt="lg">
      <Title order={1}>🏆 Leaderboard</Title>
      <Text c="dimmed" mb="md">
        See who’s topping the ranks!
      </Text>

      <Table stickyHeader stickyHeaderOffset={60}>
        <TableThead style={{ textAlign: "center", verticalAlign: "middle" }}>
          <TableTr>
            <TableTh style={{ textAlign: "center", verticalAlign: "middle" }}>
              Rank
            </TableTh>
            <TableTh style={{ textAlign: "center", verticalAlign: "middle" }}>
              Name
            </TableTh>
            <TableTh style={{ textAlign: "center", verticalAlign: "middle" }}>
              Rank point
            </TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>{rows}</TableTbody>
        <TableCaption>
          This leaderboard shows the top users based on their rank points.
        </TableCaption>
      </Table>
    </Stack>
  );
}
