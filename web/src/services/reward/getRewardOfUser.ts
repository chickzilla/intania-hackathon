const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function addPoint(point: number, token: string) {
  const response = await fetch(`${API_URL}/user-reward/reward`, {
    method: "GET",
    headers: {
      //   "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // credentials: "include",
    // body: JSON.stringify({
    //   point: point,
    // }),
  });
  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || "Reward failed");
  }
  return await response.json();
}
