import { Route, Routes } from "react-router-dom";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";
import { CoursesDetailMain } from "./Courses/CoursesDetail/CoursesDetailMain";
import { Users } from "./Users/UsersMain";


export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<Users />} />
    <Route path="profile" element={<Profile />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="courses:id" element={<CoursesDetailMain />} />
  </Routes>;
};
