import { USER_ROLE } from "@/enum/auth/user-role";

export interface User {
    id: string;
    name: string;
    role: USER_ROLE;
}
