import { useDisclosure } from "@chakra-ui/react"
import { useForm } from "react-hook-form";


export const useUsersProps = () => {
    const { isOpen, onClose } = useDisclosure()
    
    const { 
        register,
        handleSubmit,
      } = useForm();

    return {
      isOpen,
      handleSubmit,
      onClose,
      register,
    }
}