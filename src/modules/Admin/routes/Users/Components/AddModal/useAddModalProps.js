import { useDisclosure } from "@chakra-ui/react";
import { useMutation } from "@tanstack/react-query";
import { useCreateUser } from "api";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";

export const useAddModalProps = (onClose) => {

  const createUser = useCreateUser()
    
  const onSubmit = (data) => {
    createUser.mutate(data)
    onClose()
  }

  const { 
    register,
    handleSubmit,
  } = useForm();

  return {
    onSubmit,
    handleSubmit,
    register,
  }
}