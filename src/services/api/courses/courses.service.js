import { useMutation, useQuery } from '@tanstack/react-query';
import request from 'services/httpRequest';

const coursesServices = {
  getCourses: () => request.get('/course').then((res) => res?.data),
  downloadGetCourses: () => request.get('/excel/courses').then((res) => res?.data),
  updateCourse: (course_id) => request.put(`/course/${course_id}`).then(res => res?.data),
  getCourseById: (id) => request.get(`/course/${course_id}`).then(res => res?.data),
  deleteCourses: (course_id) => request.delete(`course/${course_id}`).then((res) => res?.data)
};

export const useCreateCourse = () => {
  return useMutation({ mutationFn: (data) => request.post("course", data) })
};

export const useGetCourses = () => {
  return useQuery({ queryKey: ['GET/COURSES'], queryFn: () => coursesServices.getCourses()});
};

export const useGetDownloadCourses = () => {
  return useQuery({ queryKey: ['DOWNLOAD/COURSES'], queryFn: () => coursesServices.downloadGetCourses()});
};


export const useUpdateCourse = () => {
  return useMutation({ mutationFn: (data) => request.put(`course/${data.id}`, data)})
}

export const useGetCourseById = ({userId}) => {
  return useQuery({queryKey: ["GET/COURSE/ID", userId], queryFn: () => coursesServices.getCourseById(userId), enabled: !!userId})
}

export const useDeleteCourse = () => {
  return useMutation({mutationFn: (data) => request.delete(`course/${data.id}`, data)})
  // return useMutation({mutationFn: (userId) => usersServices.deleteUserById(userId)})
}

