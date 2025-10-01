import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Authcontext";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import Register from "./components/Register";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function PrivateRoute() {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/Register" />;
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/Register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/register" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
