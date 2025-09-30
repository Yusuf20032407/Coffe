import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    login();

    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Register Page</h1>
      <form onSubmit={handleRegister} className="mt-4 flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
