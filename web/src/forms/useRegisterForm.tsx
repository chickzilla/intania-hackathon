import { RegisterFormvalues } from "@/types/auth";
import { isEmail, isNotEmpty, matchesField, useForm } from "@mantine/form";

const useRegisterForm = () => {
  return useForm<RegisterFormvalues>({
    mode: "controlled",
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmedPassword: "",
      userRole: undefined,
    },
    validate: {
      fullName: isNotEmpty("Invalid full name"),
      email: isEmail("Invalid email"),
      password: isNotEmpty("Invalid password"),
      confirmedPassword: matchesField("password", "Passwords are not the same"),
      userRole: isNotEmpty("Invalid user role"),
    },
  });
};

export default useRegisterForm;
