import { useNavigate } from "react-router-dom";
import { useAuth } from "./Authcontext";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // backend yo‘q, faqat local login qilamiz
    login();

    // ro‘yxatdan o‘tganidan keyin home page ga o'tkazamiz
    navigate("/home");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 sm:p-10">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          Create Account
        </h1>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
          Join us and explore amazing features ✨
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transform hover:scale-[1.02] transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Register;
