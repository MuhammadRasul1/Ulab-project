import { Route, Routes } from "react-router-dom";
import { ForgotPasswordStepTwo } from "./ForgotPasswordStepTwo";
import { ForgotPasswordStepThree } from "./ForgotPasswordStepThree";

export const ForgotPasswordDetail = () => {
    return(
        <Routes>
            <Route path="forgotPasswordStepTwo" element={<ForgotPasswordStepTwo />} />
            <Route path="forgotPasswordStepTwo/forgotPasswordStepThree" element={<ForgotPasswordStepThree />} />
        </Routes>
    )
}