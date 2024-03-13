import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useNavigate } from "react-router-dom";
import { useCheckEmail } from "services/auth.service";

export const useRegisterProps = () => {
  const navigate = useNavigate();

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useCheckEmail()

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.data = res?.data
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
    isPending
  };
};