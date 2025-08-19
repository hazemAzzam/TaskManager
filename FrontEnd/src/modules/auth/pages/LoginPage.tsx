import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../common/constants/routes";
import { useLogin } from "../hooks/AuthHooks";
import Input from "../../../common/ui/Input";
import { useForm } from "react-hook-form";
import { LoginFormSchema, type LoginFormData } from "../schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginFormSchema),
  });
  const login = useLogin();

  const onSubmit = (data: LoginFormData) => {
    login.mutate(data, {
      onSuccess: () => {
        navigate(ROUTES.DASHBOARD);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Input
            label="Username"
            name="username"
            register={register}
            error={errors.username?.message}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
          />
          <Input
            type="password"
            label="Password"
            name="password"
            register={register}
            error={errors.password?.message}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Enter your username"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button
              onClick={() => navigate(ROUTES.SIGNUP)}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>

        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-600">
          <p>
            <strong>Demo credentials:</strong>
          </p>
          <p>Username: john_doe | Password: password123</p>
          <p>Username: jane_smith | Password: password123</p>
        </div>
      </div>
    </div>
  );
}
