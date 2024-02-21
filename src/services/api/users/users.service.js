import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

// const usersServices = {
//   getUsers: () => request.get("/user").then(res => res?.data),
//   deleteUser: (user_id) => request.delete(`/user/${user_id}`).then(res => res?.data.users),
//   updateuser: (user_id) => request.put(`/user/${user_id}`).then(res => res?.data.users),
//   getUserById: (user_id) => request.get(`/user/${user_id}`).then(res => res?.data),
// };

export const useGetUsers = () => {
  return  useQuery({queryKey: ['users'], queryFn: () => request.get('/user').then(res => res.data)});
};

export const useUpdateUser = (user_id) => {
  return useMutation("PUT/USERS", () => usersServices.updateuser(user_id))
}

export const useGetUserById = () => {
  return useQuery("GET/USERS/ID", (user_id) => usersServices.getUserById(user_id))
}

export const useDeleteUser = () => {
  return useMutation("DELETE/USER", (user_id) => usersServices.deleteUser(user_id))
}
