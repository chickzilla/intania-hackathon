import { LoginFormValues, RegisterFormvalues } from "@/types/auth";

export default async function register(payload: RegisterFormvalues) {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${API_URL}/auth/sign-up`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({full_name: payload.fullName, 
            email: payload.email,
            password: payload.password,
             user_role: payload.userRole}),
    });

    if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.error || "Register failed");
    }

    return await response.json() ;
}