import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const usersServices = {
  createUser: () => request.post("user").then(res => res?.data),
  getUserById: (user_id) => request.get(`/user/${user_id}`).then(res => res?.data),
  updateUserById: (id) => request.put(`user/${id}`).then(res => res?.data),
  deleteUserById: (user_id) => request.delete(`/user/${user_id}`).then(res => res?.data),
};
export const useCreateUser = () => {
  return useMutation({ mutationFn: (data) => request.post("user", data)})
  // return useMutation({mutationFn: (data) => usersServices.CreateUser(data)})
}

export const useGetUserById = ({userId}) => {
  return useQuery({queryKey: ["GET/USER/ID", userId], queryFn: () => usersServices.getUserById(userId), enabled: !!userId})
}

export const useUpdateUser = () => {
  return useMutation({ mutationFn: (data) => request.put(`user/${data.id}`, data)})
  // return useMutation({ mutationFn: (data) => usersServices.updateUserById(data.id), data})
}


export const useDeleteUserById = () => {
  return useMutation({mutationFn: (data) => request.delete(`user/${data.id}`, data)})
  // return useMutation({mutationFn: (userId) => usersServices.deleteUserById(userId)})
}
