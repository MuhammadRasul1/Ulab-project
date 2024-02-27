import { useMutation, useQuery } from "@tanstack/react-query";
import request from "services/httpRequest";

const authServices = {
  login: () => request.post("/auth/login").then(res => res?.data),
};

export const useLogin = () => {
    return useMutation({ mutationFn: (data) => request.post("/auth/login", data)})
    // return useMutation({ mutationFn: (data) => authServices.login(data) })
}

export const useCheckEmail = () => {
    return useMutation({ mutationFn: (data) => request.post("auth/checkEmail", data) })
}

export const useCheckCode = () => {
    return useMutation({ mutationFn: (data) => request.post("auth/checkCode", data) })
}

export const useRegister = () => {
    return useMutation({ mutationFn: (data) => request.post("auth/register", data) })
}

export const useResetPassword = () => {
    return useMutation({ mutationFn: (data) => request.post("auth/restorePassword", data) })
}

export const useUpdatePassword = () => {
    return useMutation({ mutationFn: (data) => request.post("auth/updatePassword", data) })
}


