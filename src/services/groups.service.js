import { useMutation } from "@tanstack/react-query";
import request from "./httpRequest";

export const useCreateGroup = () => {
    return useMutation({ mutationFn: (data) => request.post("group", data) })
  };