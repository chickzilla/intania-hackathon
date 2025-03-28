import LoginForm from "@/components/shared/auth/loginForm";
import { Paper } from "@mantine/core";

const LoginPage = () => {
  return (
    <>
      <Paper radius="md" shadow="lg" p="lg" w={400}>
        <LoginForm />
      </Paper>
    </>
  );
};

export default LoginPage;
