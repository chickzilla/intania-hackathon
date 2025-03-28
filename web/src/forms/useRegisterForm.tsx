import { RegisterFormvalues } from "@/types/auth";
import { isEmail, isNotEmpty, matchesField, useForm } from "@mantine/form";

const useRegisterForm = () => {
  return useForm<RegisterFormvalues>({
    mode: "controlled",
    initialValues: {
      email: "",
      password: "",
      confirmedPassword: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: isNotEmpty("Invalid Password"),
      confirmedPassword: matchesField("password", "Passwords are not the same"),
    },
  });
};

export default useRegisterForm;
