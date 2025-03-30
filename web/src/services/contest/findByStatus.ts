
export default async function findByStatus(token : string, status: string) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/contest/find-by-status`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            status: status,
        }),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Get Contest failed");
    }

    return await response.json() ;
}