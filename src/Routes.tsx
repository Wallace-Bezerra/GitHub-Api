import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Favorites } from "./pages/Favorites";
import { Dashboard } from "./components/Dashboard";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { NotFound } from "./pages/NotFound";
import Repositories from "./pages/Repositories";

export const Router = () => {
  const { UserData } = useContext(UserContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user"
          element={UserData.login ? <Dashboard /> : <Navigate to={"/"} />}
        >
          <Route path="" element={<User />} />
          <Route path="repositories" element={<Repositories />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
