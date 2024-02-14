import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";

export const useRegisterStepThreeProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/register", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          id: res.data.data.id,
          role_id: res.data.data.role_id,
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          phone_number: res.data.data.phone_number,
          password: res.data.data.password,
          user_type: res.data.data.user_type,
          created_at: res.data.data.created_at,
          updated_at: res.data.data.updated_at
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