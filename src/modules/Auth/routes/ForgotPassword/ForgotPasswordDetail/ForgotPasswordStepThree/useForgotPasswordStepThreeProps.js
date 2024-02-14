import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useForgotPasswordStepThreeProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/update_password", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          data: res.data.data,
        })
        authStore.login()
      },
      onError: (error) => {
        setError("password", { message: error.message  })
        setError("password", { message: error.message })
      }
    })
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    isPending
  };
};