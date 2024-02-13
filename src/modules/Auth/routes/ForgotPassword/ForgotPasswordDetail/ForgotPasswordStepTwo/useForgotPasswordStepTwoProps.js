import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";

export const useForgotPasswordStepTwoProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/login", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          access_token: res.data.data.tokens.access_token,
          refresh_token: res.data.data.tokens.refresh_token,
          user_type: res.data.data.user_type
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