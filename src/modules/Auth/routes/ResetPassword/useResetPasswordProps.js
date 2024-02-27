import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "services/api/auth/auth.service";

export const useResetPasswordProps = () => {
  const navigate = useNavigate()

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const  resetPassword = useResetPassword()

  const onSubmit = (data) => {
    resetPassword.mutate(data, {
      onSuccess: (res) => {
        authStore.resetPasswordData({
          request_id: res?.data?.request_id,
          email: res?.data?.email,
        })
        navigate("Step2")
      },
      onError: (error) => {
        setError("email", { message: error?.response?.data })
      }
    })
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    resetPassword
  };
};