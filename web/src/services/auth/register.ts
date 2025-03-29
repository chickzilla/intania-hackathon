import { RegisterFormvalues } from "@/types/auth";
const isUpperCase = (char: string) =>
  char === char.toUpperCase() && char !== char.toLowerCase();
const isLowerCase = (char: string) =>
  char === char.toLowerCase() && char !== char.toUpperCase();

export default async function register(payload: RegisterFormvalues) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  //check password length *security
  if (payload.password.length < 8) {
    throw new Error("password is too short");
  }

  let containUpperLetter = false;
  let containLowerLetter = false;

  for (const char of payload.password) {
    if (containUpperLetter && containLowerLetter) {
      break;
    }
    if (isUpperCase(char)) {
      containUpperLetter = true;
    }
    if (isLowerCase(char)) {
      containLowerLetter = true;
    }
  }
  if (!(containUpperLetter && containLowerLetter)) {
    throw new Error("password must contain Uppercase and Lowercase character");
  }
  const response = await fetch(`${API_URL}/auth/sign-up`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      full_name: payload.fullName,
      email: payload.email,
      password: payload.password,
      user_role: payload.userRole,
    }),
  });

  if (!response.ok) {
    const errorResponse = await response.json();
    throw new Error(errorResponse.error || "Register failed");
  }

  return await response.json();
}
