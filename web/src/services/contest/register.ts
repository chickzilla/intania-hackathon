const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function register(contestId: string, newStatus: string, token: string) {

    console.log("in func ", token);
    const response = await fetch(`${API_URL}/contest/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        // credentials: "include",
        body: JSON.stringify({
            contest_id : contestId,
            new_status : newStatus
        }),
    });
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Add point failed");
    }
    return await response.json();
}
