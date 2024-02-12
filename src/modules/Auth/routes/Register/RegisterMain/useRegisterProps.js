import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";
import { useNavigate } from "react-router-dom";

export const useRegisterProps = () => {
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/check_email", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.registerData({
          data: res.data.data,
        })
        navigate("registerStepTwo")
      },
      onError: (error) => {
        setError("first_name", { message: error.message  })
        setError("last_name", { message: error.message })
        setError("email", { message: error.message  })
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