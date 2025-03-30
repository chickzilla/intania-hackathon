const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function getMe(token: string) {
    const response = await fetch(`${API_URL}/user/getme`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Get me failed");
    }
    return await response.json();
}
