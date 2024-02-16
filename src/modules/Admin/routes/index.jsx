import { Route, Routes } from "react-router-dom";
import { UsersMain } from "./Users/UsersMain";
import { Detail } from "./Users/Detail";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";

export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<UsersMain />} />
    <Route path="profile" element={<Profile />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="users:id" element={<Detail />} />
  </Routes>;
};
