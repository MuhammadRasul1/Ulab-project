import { Route, Routes } from "react-router-dom";
import { RegisterStepTwo } from "./RegisterStepTwo";
import { RegisterStepThree } from "./RegisterStepThree";

export const RegisterDetail = () => {
    return(
        <Routes>
            <Route path="registerStepTwo" element={<RegisterStepTwo />} />
            <Route path="registerStepThree" element={<RegisterStepThree />} />
        </Routes>
    )
}