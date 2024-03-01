import { useForm } from "react-hook-form";
import { useCreateCourse, useGetDownloadCourses } from "api";
import { useDisclosure } from "@chakra-ui/react";
import { useCreateGroup } from "services/groups.service";

export const useBtnsProps = (detail) => {
    
    const { isOpen, onOpen, onClose } = useDisclosure()

    const { 
        register,
        handleSubmit,
    } = useForm();

    const downloadCourses = useGetDownloadCourses();    

    const handleDownload = (data) => {
        downloadCourses
    }

    const { mutate} = useCreateGroup();
    const onSubmit = (data) => {
        mutate({
            course_id: detail?.id,
            ...data
        },)
        onClose()
    }

    return {
        register,
        onSubmit,
        handleSubmit,
        isOpen, 
        onOpen, 
        handleDownload,
        onClose 
    };
}