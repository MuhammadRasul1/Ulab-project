import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";


export const useEditModalProps = () => {
    
    const { mutateAsync } = useMutation({mutationFn: (id) => request.delete(`user/${id}`)})
  
    const handleDeleteUser = (id) => {
      mutateAsync(id);
    };

    const { 
      handleSubmit,
    } = useForm();


    return {
        handleDeleteUser,
        handleSubmit,
    }
}