import { useDisclosure } from "@chakra-ui/react";
import { useCreateUser } from "api";
import { useForm } from "react-hook-form";

export const useHeaderProps = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  
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
    isOpen, 
    onOpen, 
    onClose
  }
}