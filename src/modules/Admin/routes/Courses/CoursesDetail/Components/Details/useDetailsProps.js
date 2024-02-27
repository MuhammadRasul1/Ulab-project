import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import request from "services/httpRequest";


export const useDetailProps = () => {
    
    const { 
        register,
        handleSubmit,
    } = useForm();

    const { mutate, isPending } = useMutation({ mutationFn: (data) => request.post("course", data) })
    const onSubmit = (data) => {
        const datas = {
            photo: data?.photo,
            name: data?.name,
            for_who: data?.for_who,
            weekly_number: data?.weekly_number - 0,
            duration: data?.duration,
            price: data?.price - 0,
            beginning_date_course: data?.beginning_date_course,
        }
        mutate(datas)
    }

    const { mutateAsync } = useMutation({mutationFn: (id) => request.delete(`course/${id}`)})
  
    const handleDeleteCourse = (id) => {
        mutateAsync(id);
    };

    return {
        handleDeleteCourse,
        register,
        onSubmit,
        handleSubmit,
    };
}