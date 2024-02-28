import { useForm } from "react-hook-form";
import { useCreateCourse } from "api";
import { useDisclosure } from "@chakra-ui/react";

export const useHeaderProps = () => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        register,
        handleSubmit,
    } = useForm();

    const createCourse = useCreateCourse();
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
        createCourse.mutate(datas)
        onClose()
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        isOpen, 
        onOpen, 
        onClose 
    };
}