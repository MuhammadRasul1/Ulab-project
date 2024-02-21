import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";
import { useNavigate } from "react-router-dom";

export const useForgotPasswordMainProps = () => {
  const navigate = useNavigate()

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/sendExistEmail", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.forgotPasswordData({
          request_id: res.data.request_id,
          email: res.data.email,
        })
        navigate("forgotPasswordStepTwo")
      },
      onError: (error) => {
        setError("email", { message: error.message })
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