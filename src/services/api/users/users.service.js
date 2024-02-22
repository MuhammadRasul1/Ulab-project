import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const usersServices = {
  getUsers: () => request.get("/user").then(res => res?.data),
  deleteUserById: (user_id) => request.delete(`/user/${user_id}`).then(res => res?.data),
  updateUserById: (user_id) => request.put(`/user/${user_id}`).then(res => res?.data),
  getUserById: (user_id) => request.get(`/user/${user_id}`).then(res => res?.data),
};

export const useGetUsers = () => {
  return  useQuery({queryKey: ['users'], queryFn: () => request.get('/students', ).then(res => res.data)});
};

export const useUpdateUser = ({userId}) => {
  // const { mutateAsync } = useMutation({mutationFn: (userId) => usersServices.updateUserById(userId)})
  // return mutateAsync
  return useMutation({mutationFn: (userId) => usersServices.updateUserById(userId)})
}

export const useGetUserById = ({userId}) => {
  return useQuery({queryKey: ["GET/USER/ID", userId], queryFn: () => usersServices.getUserById(userId), enabled: !!userId})
}

export const useDeleteUserById = ({userId}) => {
  return useMutation({mutationFn: (userId) => usersServices.deleteUserById(userId)})
  // return useMutation("DELETE/USER", (user_id) => usersServices.deleteUserById(user_id))
}
