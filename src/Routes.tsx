import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Repositories } from "./pages/Repositories";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route path="" element={<User />} />
          <Route path="repositories" element={<Repositories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
