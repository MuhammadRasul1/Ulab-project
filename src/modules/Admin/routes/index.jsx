import { Route, Routes } from "react-router-dom";
import { Profile } from "./Profile";
import { Users } from "./Users";
import { Courses } from "./Courses";
import { ProfileDetail } from "./Profile/ProfileDetail";
import { CoursesDetails } from "./Courses/Components/CoursesDetails";
import { Mentors } from "./Mentors";
import { Groups } from "./Groups";


export const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="courses" element={<Courses />} />
      <Route path="courses/:id" element={<CoursesDetails />} />
      <Route path="groups" element={<Groups />} />
      <Route path="users" element={<Users />} />
      <Route path="mentors" element={<Mentors />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/detail" element={<ProfileDetail />} />
    </Routes>
  );
};
