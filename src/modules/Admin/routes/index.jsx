import { Route, Routes } from "react-router-dom";
// import { ListUsers } from "./Users/UsersMain/ListUsers";
// import { ListMentors } from "./Users/UsersMain/ListMentors";
import { Detail } from "./Users/Detail";
import { CoursesMain } from "./Courses/CoursesMain";
import { Profile } from "./Profile";
import { UsersTab } from "./Components/UsersTab";

export const AdminRoutes = () => {
  return <Routes>
    {/* <Route path="users" element={<ListUsers />} />
    <Route path="mentors" element={<ListMentors />} /> */}
    <Route path="users" element={<UsersTab />} />
    <Route path="profile" element={<Profile />} />
    <Route path="courses" element={<CoursesMain />} />
    <Route path="users:id" element={<Detail />} />
  </Routes>;
};
