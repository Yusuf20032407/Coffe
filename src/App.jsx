import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { AuthProvider, useAuth } from "./components/Authcontext";
import { ConfigProvider, theme } from "antd";
import Menu from "./pages/Menu";
import Register from "./components/Register";
import Revards from "./pages/Revards";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Location from "./components/location"


function Layout({ onToggleTheme, isDark }) {
  return (
    <>
      <Navbar onToggleTheme={onToggleTheme} isDark={isDark} />
      <Outlet />
      <Footer />
    </>
  );
}

function PrivateRoute() {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/register" />;
}

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route
              element={
                <Layout
                  onToggleTheme={() => setIsDark(!isDark)}
                  isDark={isDark}
                />
              }
            >
              <Route path="/home" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/revards" element={<Revards />} />
              <Route path="/location" element={<Location />} />
            </Route>
          </Route>
          <Route path="/" element={<Navigate to="/register" />} />
        </Routes>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
