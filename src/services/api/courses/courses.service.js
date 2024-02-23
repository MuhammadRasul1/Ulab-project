import { useMutation, useQuery } from 'react-query';
import request from 'services/httpRequest';

const coursesServices = {
  getCourses: () => request.get('/course').then((res) => res?.data?.courses),
  updateCourse: (course_id) => request.put(`/course/${course_id}`).then(res => res?.data),
  getCourseById: (id) => request.get(`/course/${course_id}`).then(res => res?.data),
  deleteCourses: (course_id) => request.delete(`course/${course_id}`).then((res) => res?.data)
};

export const useGetCourses = () => {
  return useQuery({ queryKey: 'GET/COURSES', queryFn: coursesServices.getCourses });
};

export const useUpdateCourse = (user_id) => {
  return useMutation("PUT/COURSES", () => coursesServices.updateCourse(user_id))
}

export const useGetCourseById = ({userId}) => {
  return useQuery({queryKey: ["GET/COURSE/ID", userId], queryFn: () => coursesServices.getCourseById(userId), enabled: !!userId})
}

export const useDeleteCourses = () => {
  return useMutation('DELETE/COURSES', (course_id) => coursesServices.deleteCourses(subject_id));
};


// import { useMutation, useQuery } from "react-query";
// import request from "services/httpRequest";

// const usersServices = {
//   getUsers: () => request.get("/users").then(res => res.data.data),
//   deleteUser: (user_id) => request.delete(`/users/${user_id}`).then(res => res?.data),
//   updateuser: (user_id) => request.put(`/users/${user_id}`).then(res => res?.data),
//   getUserById: (user_id) => request.get(`/users/${user_id}`).then(res => res?.data),
// };

// export const useGetUsers = (settings) => {
//   return useQuery("GET/USERS", usersServices.getUsers, settings);
// };

// export const useUpdateUser = (user_id) => {
//   return useMutation("PUT/USERS", () => usersServices.updateuser(user_id))
// }

// export const useGetUserById = () => {
//   return useQuery("GET/USERS/ID", (user_id) => usersServices.getUserById(user_id))
// }

// export const useDeleteUser = () => {
//   return useMutation("DELETE/USER", (user_id) => usersServices.deleteUser(user_id))
// }

