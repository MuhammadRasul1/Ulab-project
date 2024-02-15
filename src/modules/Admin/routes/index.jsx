import { Route, Routes } from "react-router-dom";
import { UsersList } from "./Users/UsersList";
import { Detail } from "./Users/Detail";
import { CoursesMain } from "./Courses/CoursesMain";

export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<UsersList />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="users:id" element={<Detail />} />
  </Routes>;
};
