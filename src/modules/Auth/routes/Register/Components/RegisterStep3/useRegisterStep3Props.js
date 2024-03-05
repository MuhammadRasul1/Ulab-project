import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";
import { useRegister } from "services/auth.service";

export const useRegisterStep3Props = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useRegister()

  const onSubmit = (data) => {
    mutate({
      ...data,
      first_name: auth?.data?.first_name,
      last_name: auth?.data?.last_name,
      email: auth?.data?.email
    }, {
      onSuccess: (res) => {
        authStore.userData = res?.data
        authStore.data = {};
        authStore.login()
      },
      onError: (error) => {
        setError("password", { message: error?.response?.data   })
        setError("confirmPassword", { message: error?.response?.data  })
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