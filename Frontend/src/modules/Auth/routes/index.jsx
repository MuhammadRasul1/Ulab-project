import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { RegisterMain } from "./Register/RegisterMain/RegisterMain";
import { RegisterDetail } from "./Register/RegisterDetail/RegisterDetail";

export const AuthRoutes = () => {
  return <Routes>
    <Route path="" index element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<RegisterMain />} />
    <Route path="registerDetail" element={<RegisterDetail />} />
  </Routes>;
};
