import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";


export const useLoginProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("/auth/login", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          status: res.data.status,
          description: res.data.description,
          id: res.data.id,
          user_type: res.data.user_type,
          role_id: res.data.role_id,
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email,
          phone_number: res.data.phone_number,
          password: res.data.password,
          created_at: res.data.created_at,
          updated_at: res.data.updated_at,
        })
        authStore.login()
      },
      onError: (error) => {
        setError("email", { message: "Неверный email"  })
        setError("password", { message: "Неверный пароль" })
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