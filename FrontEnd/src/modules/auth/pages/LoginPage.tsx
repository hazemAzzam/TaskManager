import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../common/constants/routes";

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    navigate(ROUTES.DASHBOARD);
    // if (handleLogin(formData.username, formData.password)) {
    //   setError("");
    // } else {
    //   setError("Invalid credentials");
    // }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Please sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input type="text" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your username" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your password" required />
          </div>

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <button onClick={() => navigate(ROUTES.SIGNUP)} className="text-blue-600 hover:text-blue-800 font-medium">
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
