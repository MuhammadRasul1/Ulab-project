import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { authStore } from "store/auth.store";
import { observer } from "mobx-react-lite";
import { AuthRoutes } from "modules/Auth/routes";
import { AdminRoutes } from "modules/Admin/routes";
import { Users } from "modules/Users/Users";

export const Router = observer(() => {

  const isAuth = authStore.isAuth;

  const role = JSON.parse(localStorage.getItem("auth"));

  if (!isAuth) {
    return <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="*" element={<Navigate to="/auth" />} />
    </Routes>;
  }
  
  if(role.userData?.user_type === "admin") {
    return <Routes>
      <Route path="" element={<MainLayout />}>
        <Route index path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<Navigate to="/admin/courses" />} />
      </Route>
    </Routes>;
  } else {
      return(
        <Routes>
          <Route path="users" element={<Users />}/>
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      )
  }
});
