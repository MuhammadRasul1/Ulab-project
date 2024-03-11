import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const lessonsServices = {
  createLesson: (data) => request.post("/lesson", data).then(res => res?.data),
  getLessons: () => request.get('/lesson').then((res) => res?.data),
  getLessonById: (lessonId) => request.get(`/lesson/${lessonId}`).then(res => res?.data),
  updateLessonById: (lessonId) => request.put(`/lesson/${lessonId}`).then(res => res?.data),
  deleteLessonById: (lessonId) => request.delete(`/lesson/${lessonId}`).then(res => res?.data),
};

export const useCreateLesson = () => {
  return useMutation({ mutationFn: (data) => lessonsServices.createLesson(data)})
}

export const useGetLessons = (params) => {
  return useQuery({ queryKey: ['GET/LESSONS', params], queryFn: () => lessonsServices.getLessons(params)});
};

export const useGetLessonById = ({lessonId}) => {
  return useQuery({queryKey: ["GET/LESSON/ID", lessonId], queryFn: () => lessonsServices.getLessonById(lessonId), enabled: !!lessonId})
}

export const useUpdateLessonById = (mutationSettings) => {
  return useMutation({
     mutationFn: (data) => request.put(`lesson/${data.id}`, data),
     ...mutationSettings
    })
}

export const useDeleteLessonById = () => {
  return useMutation({mutationFn: (data) => request.delete(`lesson/${data.id}`, data)})
}
