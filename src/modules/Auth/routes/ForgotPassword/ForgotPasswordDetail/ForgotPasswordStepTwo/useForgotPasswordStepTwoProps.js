import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";
import { useNavigate } from "react-router-dom";

export const useForgotPasswordStepTwoProps = () => {
  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("auth/check_code", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate({
      ...data,
      request_id: auth?.userForgotPasswordData?.request_id
    }, {
      onSuccess: (res) => {
        authStore.forgotPasswordInfoData({
          data: res.data.data,
        })
        navigate("forgotPasswordStepThree")
      },
      onError: (error) => {
        setError("verify_code", { message: error.message })
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