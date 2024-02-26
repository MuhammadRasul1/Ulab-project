import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { ResetPassword } from "./ResetPassword";
import { ResetPasswordStep2 } from "./ResetPassword/Components/ResetPasswordStep2";
import { ResetPasswordStep3 } from "./ResetPassword/Components/ResetPasswordStep3";
import { Register } from "./Register";
import { RegisterStep2 } from "./Register/Components/RegisterStep2";
import { RegisterStep3 } from "./Register/Components/RegisterStep3";

export const AuthRoutes = () => {
  return <Routes>
    <Route path="" index element={<Login />} />
    <Route path="login" element={<Login />} />
    <Route path="resetPassword" element={<ResetPassword />} />
    <Route path="resetPassword/Step2" element={<ResetPasswordStep2 />} />
    <Route path="resetPassword/Step2/Step3" element={<ResetPasswordStep3 />} />
    <Route path="register" element={<Register />} />
    <Route path="register/Step2" element={<RegisterStep2 />} />
    <Route path="register/Step2/Step3" element={<RegisterStep3 />} />
  </Routes>;
};
