import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useLogin } from "services/api/auth/auth.service";

export const useLoginProps = () => {

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useLogin()

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
          access_token: res?.data?.access_token,
          id: res?.data?.data?.id,
          role_id: res?.data?.data?.role_id,
          user_type: res?.data?.data?.user_type,
          first_name: res?.data?.data?.first_name,
          last_name: res?.data?.data?.last_name,
          email: res?.data?.data?.email,
          phone_number: res?.data?.data?.phone_number,
          password: res?.data?.data?.password,
        })
        authStore.login()
      },
      onError: (error) => {
        setError("email", { message: error?.response?.data  })
        setError("password", { message: error?.response?.data })
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