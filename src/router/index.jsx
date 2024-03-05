import { Navigate, Route, Routes } from "react-router-dom";
import { MainLayout } from "../Layouts/MainLayout";
import { authStore } from "store/auth.store";
import { observer } from "mobx-react-lite";
import { AuthRoutes } from "modules/Auth/routes";
import { AdminRoutes } from "modules/Admin/routes";
import { StudentPath } from "modules/Users";
import { CoursesFundamentals } from "modules/Users/CoursesFundamentals";
import { AuthLayout } from "../Layouts/AuthLayout";

export const Router = observer(() => {

  const isAuth = authStore.isAuth;

  const role = JSON.parse(localStorage.getItem("auth"));

  // const RoleBasedRoutes = {
  //   admin: <AdminRoutes/>,
  //   user: <Users />
  // }

  if (!isAuth) {
    return (
      <Routes>
        <Route path="" element={<AuthLayout />}>
          <Route index path="/auth/*" element={<AuthRoutes />} />
          <Route path="*" element={<Navigate to="/auth" />} />
          <Route path="" element={<Navigate to="/auth" />} />
        </Route>
      </Routes>
    );
  }

  // return <Routes>
  //   <Route path="" element={<MainLayout />}>
  //     {RoleBasedRoutes[role.userData?.user_type]}
  //   </Route>
  // </Routes>
  
  if(role.userData?.data?.user_type === "Admin" || role.userData?.data?.user_type === "Mentor") {
    return (
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route index path="/admin/*" element={<AdminRoutes />} />
          <Route path="*" element={<Navigate to="/admin/courses" />} />
        </Route>
      </Routes>
    );
  } else {
    return(
      <Routes>
          <Route path="users" element={<StudentPath />}/>
          <Route path="users/:postId" element={<CoursesFundamentals />} />
          <Route path="*" element={<Navigate to="/users" />} />
        </Routes>
      )
  }
});
