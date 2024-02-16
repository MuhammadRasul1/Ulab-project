// import { useMutation, useQuery } from 'react-query';
// import request from 'services/httpRequest';

// const coursesServices = {
//   getCourses: () => request.get('/course').then((res) => res?.data?.data),
//   getCoursesById: (id) => request.get(`/course/${id}`).then(res => res?.data?.data),
//   deleteCourses: (course_id) => request.delete(`course/${course_id}`).then((res) => res?.data?.data)
// };

// export const useGetCourses = () => {
//   return useQuery({ queryKey: 'GET/COURSES', queryFn: coursesServices.getCourses });
// };

// export const useGetCoursesById = (id) => {
//   return useQuery("GET/COURSE/ID", () => coursesServices.getCoursesById(id))
// }

// export const useDeleteCourses = () => {
//   return useMutation('DELETE/COURSES', (course_id) => coursesServices.deleteCourses(subject_id));
// };