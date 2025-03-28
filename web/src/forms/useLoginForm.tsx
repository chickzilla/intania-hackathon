import { LoginFormValues } from "@/types/auth";
import { isEmail, isNotEmpty, useForm } from "@mantine/form";

const useLoginForm = () => {
  return useForm<LoginFormValues>({
    mode: "controlled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: isNotEmpty("Invalid Password"),
    },
  });
};

export default useLoginForm;
