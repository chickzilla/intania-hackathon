const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function addPoint(point: number, token: string) {

    console.log("in func ", token);
    const response = await fetch(`${API_URL}/user/add-point`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        // credentials: "include",
        body: JSON.stringify({
            point: point,
        }),
    });
    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Add point failed");
    }
    return await response.json();
}
