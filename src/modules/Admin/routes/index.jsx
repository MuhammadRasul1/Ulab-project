import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";
import { Users } from "./Users";
import { Courses } from "./Courses";
import { ProfileDetail } from "./Profile/ProfileDetail";
import { CoursesDetails } from "./Courses/Components/CoursesDetails";


export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="users" element={<Users />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/detail" element={<ProfileDetail />} />
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CoursesDetails />} />
    </Routes>
  );
};
