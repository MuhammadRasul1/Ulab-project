import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useLogin } from "services/auth.service";

export const useLoginProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const { mutate, isPending } = useLogin();

  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        authStore.userData = res?.data
        authStore.login();
      },
      onError: (error) => {
        setError("email", { message: error?.response?.data  })
        setError("password", { message: error?.response?.data })
      },
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