import { useMutation } from "@tanstack/react-query";
import { useGetUserById } from "api";
import { useForm } from "react-hook-form";
import request from "services/httpRequest";
// import { useDeleteUserById } from "api";


export const useEditModalProps = () => {

  // const deleteUserById = useDeleteUserById({userId: activeUserId})
  // const handleDeleteUser = (id) => {
  //   deleteUserById(id);
  // };
  
    const { mutateAsync } = useMutation({mutationFn: (id) => request.delete(`user/${id}`)})
  
    const handleDeleteUser = (id) => {
      mutateAsync(id);
    };

    // const getUserById = useGetUserById({userId: activeUserId})

    const { mutate } = useMutation({ mutationFn: (data) => request.put(`user/${data.id}`, data)})
  
    const onSubmit = (data) => {
      mutate({...data, id: activeUserId})
    }


    const { 
      handleSubmit,
    } = useForm();


    return {
        handleDeleteUser,
        handleSubmit,
        onSubmit
    }
}