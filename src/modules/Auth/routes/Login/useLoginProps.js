import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import axios from "axios"

const request = axios.create({
  baseURL: "https://lms-vuny.onrender.com"
})

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
          id: res.data.data.id,
          role_id: res.data.data.role_id,
          first_name: res.data.data.first_name,
          last_name: res.data.data.last_name,
          email: res.data.data.email,
          phone_number: res.data.data.phone_number,
          password: res.data.data.password,
          created_at: res.data.data.created_at,
          updated_at: res.data.data.updated_at,
        })
        authStore.login()
      },
      onError: (error) => {
        setError("email", { message: "Неверный email или номер телефона"  })
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


// setError("email", { message: error.message })