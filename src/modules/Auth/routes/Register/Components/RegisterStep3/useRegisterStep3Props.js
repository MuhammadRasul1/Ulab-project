import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";
import { useRegister } from "services/api/auth/auth.service";

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
      first_name: auth?.userRegisterData?.first_name,
      last_name: auth?.userRegisterData?.last_name,
      email: auth?.userRegisterData?.email
    }, {
      onSuccess: (res) => {
        authStore.updateUserData({
          id: res?.data?.id,
          role_id: res?.data?.role_id,
          first_name: res?.data?.first_name,
          last_name: res?.data?.last_name,
          email: res?.data?.email,
          phone_number: res?.data?.phone_number,
          password: res?.data?.password,
          user_type: res?.data?.user_type,
        })
        authStore.register()
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