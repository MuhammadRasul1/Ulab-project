import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useNavigate } from "react-router-dom";
import { useCheckCode } from "services/api/auth/auth.service";

export const useResetPasswordStep2Props = () => {

  const navigate = useNavigate()
  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useCheckCode()

  const onSubmit = (data) => {
    mutate({
      ...data,
      request_id: auth?.userResetPasswordData?.request_id
    }, {
      onSuccess: (res) => {
        authStore.resetPasswordInfoData({
          data: res?.data?.data,
        })
        navigate("Step3")
      },
      onError: (error) => {
        setError("verify_code", { message: error?.response?.data })
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