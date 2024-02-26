import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useResetPasswordStep3Props = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/updatePassword", data) })

  const onSubmit = (data) => {
    mutate({
      ...data,
      email: auth?.userResetPasswordData?.email
    }, {
      onSuccess: (res) => {
        authStore.updateUserData({
          id: res?.data?.id,
          role_id: res?.data?.role_id,
          first_name: res?.data?.first_name,
          last_name: res?.data?.last_name,
          phone_number: res?.data?.phone_number,
          password: res?.data?.password,
          user_type: res?.data?.user_type,
        })
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