const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function claimReward(token: string, rewardId: string, point: number) {
    const response = await fetch(`${API_URL}/reward/claim`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        // credentials: "include",
        body: JSON.stringify({
            reward_id: rewardId,
            point: point,
        }),
    });
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Claim reward failed");
    }
    return await response.json();
}
