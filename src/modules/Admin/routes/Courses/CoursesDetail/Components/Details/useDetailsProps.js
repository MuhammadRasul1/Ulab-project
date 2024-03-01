import { useForm } from "react-hook-form";
import { useDeleteCourse, useUpdateCourse } from "api";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useDetailProps = (detail) => {
    
    const activeUserId = detail?.id 

    const navigate = useNavigate();
    
    const updateCourse = useUpdateCourse()
  
    const handleEdit = (data) => {
        const datas = {
            photo: data?.photo,
            name: data?.name,
            type: data?.type,
            beginning_date_course: data?.beginning_date_course,
            for_who: data?.for_who,
            weekly_number: data?.weekly_number - 0,
            duration: data?.duration,
            price: data?.price - 0,
        }
        updateCourse.mutate({...datas, id: activeUserId})
        navigate("/admin/courses")
    }

    useEffect(() => {
        reset({
          photo: detail?.photo,
          name: detail?.name,
          for_who: detail?.for_who,
          type: detail?.type,
          weekly_number: detail?.weekly_number,
          duration: detail?.duration,
          price: detail?.price,
        })
      }, [detail])

    const { 
        register,
        handleSubmit,
        reset
    } = useForm();

    const deleteCourse = useDeleteCourse()

    const handleDeleteCourse = (data) => {
      deleteCourse.mutate({...data, id: activeUserId})
      navigate("/admin/courses")
    }

    return {
        handleDeleteCourse,
        register,
        handleSubmit,
        handleEdit
    };
}