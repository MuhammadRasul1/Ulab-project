import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useUpdatePassword } from "services/auth.service";

export const useResetPasswordStep3Props = () => {

  const auth = JSON.parse(localStorage.getItem("auth"))

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useUpdatePassword()

  const onSubmit = (data) => {
    mutate({
      ...data,
      email: auth?.data?.email
    }, {
      onSuccess: (res) => {
        authStore.userData = res?.data
        authStore.data = {};
        authStore.login()
      },
      onError: (error) => {
        setError("password", { message: error?.response?.data   })
        setError("confirmPassword", { message: error?.response?.data  })
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