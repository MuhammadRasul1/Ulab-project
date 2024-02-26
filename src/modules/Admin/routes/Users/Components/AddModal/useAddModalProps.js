import { useMutation } from "@tanstack/react-query";
import { useCreateUser } from "api";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";

export const useAddModalProps = () => {

  // const createUser = useCreateUser()
    
  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("user", data) })
  const onSubmit = (data) => {
    mutate(data)
  }

  const { 
    register,
    handleSubmit,
  } = useForm();

  return {
    onSubmit,
    handleSubmit,
    register,
    // isPending
  }
}