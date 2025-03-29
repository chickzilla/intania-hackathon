import { LoginFormValues } from "@/types/auth";

export default async function getLeaderBoard() {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/user/leaderboard`, {
        method: "GET",
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Get leader board failed");
    }

    return await response.json() ;
}