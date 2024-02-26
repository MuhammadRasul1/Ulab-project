import { Route, Routes } from "react-router-dom";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";
import { Users } from "./Users";
import { CoursesDetail } from "./Courses/CoursesDetail";


export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<Users />} />
    <Route path="profile" element={<Profile />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="courses/:id" element={<CoursesDetail />} />
  </Routes>;
};
