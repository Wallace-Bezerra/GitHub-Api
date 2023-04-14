import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Repositories } from "./pages/Repositories";
import { Favorites } from "./pages/Favorites";
import { Dashboard } from "./components/Dashboard";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<Dashboard />}>
          <Route path="" element={<User />} />
          <Route path="repositories" element={<Repositories />} />
        </Route>
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};
