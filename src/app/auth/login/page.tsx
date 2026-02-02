import { LoginForm } from "./ui/LoginForm";

export default async function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen pt-32 sm:pt-52">
      <LoginForm />
    </div>
  );
}
