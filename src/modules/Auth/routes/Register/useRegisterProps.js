import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useNavigate } from "react-router-dom";
import { useCheckEmail } from "services/api/auth/auth.service";

export const useRegisterProps = () => {
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const checkEmail = useCheckEmail()

  const onSubmit = (data) => {
    checkEmail.mutate(data, {
      onSuccess: (res) => {
        authStore.registerData({
          request_id: res?.data?.request_id,
          first_name: res?.data?.first_name,
          last_name: res?.data?.last_name,
          email: res?.data?.email
        })
        navigate("Step2")
      },
      onError: (error) => {
        setError("first_name", { message: error?.response?.data  })
        setError("last_name", { message: error?.response?.data })
        setError("email", { message: error?.response?.data  })
      }
    })
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    onSubmit,
    checkEmail
  };
};