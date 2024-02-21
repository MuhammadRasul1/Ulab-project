import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useRegisterStepThreeProps = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/register", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate({
      ...data,
      first_name: auth?.userRegisterData?.first_name,
      last_name: auth?.userRegisterData?.last_name,
      email: auth?.userRegisterData?.email
    }, {
      onSuccess: (res) => {
        authStore.updateUserData({
          id: res.data.id,
          role_id: res.data.role_id,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          phone_number: res.data.phone_number,
          password: res.data.password,
          user_type: res.data.user_type,
          created_at: res.data.created_at,
          updated_at: res.data.updated_at
        })
        authStore.register()
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