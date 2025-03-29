const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default async function addPoint(point: number) {
    const response = await fetch(`${API_URL}/user/add-point`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
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
