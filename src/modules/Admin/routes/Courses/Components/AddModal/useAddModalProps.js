import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";


export const useAddModalProps = () => {
    
    const { 
        register,
        handleSubmit,
    } = useForm();

    const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("course", data) })
    const onSubmit = (data) => {
        mutate(data)
    }


    return {
        register,
        onSubmit,
        handleSubmit,
    };
}