import { Route, Routes } from "react-router-dom";
import { Detail } from "./Users/Detail";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";
import { UsersTab } from "./Components/UsersTab";
import { CoursesDetailMain } from "./Courses/CoursesDetail/CoursesDetailMain";

export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<UsersTab />} />
    <Route path="users:id" element={<Detail />} />
    <Route path="profile" element={<Profile />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="courses:id" element={<CoursesDetailMain />} />
  </Routes>;
};
