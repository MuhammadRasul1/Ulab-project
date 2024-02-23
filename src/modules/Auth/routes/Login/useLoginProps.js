import { useForm } from "react-hook-form";
import { authStore } from "store/auth.store";
import { useMutation } from "@tanstack/react-query"
import request from "services/httpRequest";
import { useState } from "react";


export const useLoginProps = () => {

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { 
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm();

  const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("/auth/login", data) })

  const onSubmit = (data) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        authStore.updateUserData({
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
        setError("email", { message: error.response.data  })
        setError("password", { message: error.response.data })
      }
    })
  };

  return {
    register,
    handleSubmit,
    show,
    handleClick,
    formState: { errors },
    onSubmit,
    isPending
  };
};