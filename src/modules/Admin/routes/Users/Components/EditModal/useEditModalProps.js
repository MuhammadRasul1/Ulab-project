import { useMutation } from "@tanstack/react-query";
import { useDeleteUserById } from "api";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";


export const useEditModalProps = () => {

  // const deleteUserById = useDeleteUserById({userId: activeUserId})
    
    const { mutateAsync } = useMutation({mutationFn: (id) => request.delete(`user/${id}`)})
  
    const handleDeleteUser = (id) => {
      mutateAsync(id);
    };

    // const handleDeleteUser = (id) => {
    //   deleteUserById(id);
    // };

    const { 
      handleSubmit,
    } = useForm();


    return {
        handleDeleteUser,
        handleSubmit,
        // activeUserId
    }
}