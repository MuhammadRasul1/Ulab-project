import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useForgotPasswordStepThreeProps = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/updatePassword", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate({
      ...data,
      email: auth?.userForgotPasswordData.email
    }, {
      onSuccess: (res) => {
        authStore.updateUserData({
          id: res.data.data.id, 
          role_id: res.data.data.role_id, 
          first_name: res.data.data.first_name, 
          last_name: res.data.data.last_name, 
          email: res.data.data.email, 
          phone_number: res.data.data.phone_number, 
          password: res.data.data.password, 
          user_type: res.data.data.user_type, 
          created_at: res.data.data.created_at, 
        })
        authStore.login()
      },
      onError: (error) => {
        setError("password", { message: error.message  })
        setError("confirm_password", { message: error.message })
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