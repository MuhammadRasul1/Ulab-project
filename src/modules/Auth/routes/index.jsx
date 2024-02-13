import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { ForgotPasswordMain } from "./ForgotPassword/ForgotPasswordMain";
import { ForgotPasswordDetail } from "./ForgotPassword/ForgotPasswordDetail";
import { RegisterMain } from "./Register/RegisterMain/RegisterMain";
import { RegisterDetail } from "./Register/RegisterDetail";

export const AuthRoutes = () => {
  return <Routes>
    <Route path="" index element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="register" element={<RegisterMain />} />
    <Route path="/register/*" element={<RegisterDetail />} />
    <Route path="forgotPassword" element={<ForgotPasswordMain />} />
    <Route path="/forgotPassword/*" element={<ForgotPasswordDetail />} />
  </Routes>;
};
