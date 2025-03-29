import RegisterForm from "@/components/shared/auth/registerForm";
import { Paper } from "@mantine/core";

const RegisterPage = () => {
  return (
    <Paper radius="md" shadow="lg" p="lg" w={400}>
      <RegisterForm />
    </Paper>
  );
};

export default RegisterPage;
