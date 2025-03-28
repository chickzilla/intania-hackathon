import { USER_ROLE } from "@/enum/auth/user-role";

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormvalues = {
  fullName: string;
  email: string;
  password: string;
  confirmedPassword: string;
  userRole: USER_ROLE | undefined;
};
