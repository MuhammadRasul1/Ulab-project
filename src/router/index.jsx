import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { authStore } from "store/auth.store";
import { observer } from "mobx-react-lite";
import { AuthRoutes } from "modules/Auth/routes";
import { AdminRoutes } from "modules/Admin/routes";

export const Router = observer(() => {

  const isAuth = authStore.isAuth;

  const role = "admin";

  if (!isAuth) {
    return <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>;
  }
  
  if(role === "admin") {
    return <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Route>
    </Routes>;
  } else {
    <Route path="*" element={<Navigate to="/home" />} />
  }
});
