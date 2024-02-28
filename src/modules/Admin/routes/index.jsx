import { Route, Routes } from "react-router-dom";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";
import { Users } from "./Users";
import { CoursesDetail } from "./Courses/CoursesDetail";
// import { ProfileDetail } from "./Profile/ProfileDetail";


export const AdminRoutes = () => {
  return <Routes>
    <Route path="users" element={<Users />} />
    <Route path="profile" element={<Profile />} />
    {/* <Route path="profileDetail" element={<ProfileDetail />} /> */}
    <Route path="courses" element={<CoursesMain />} />
    <Route path="courses/:id" element={<CoursesDetail />} />
  </Routes>;
};
