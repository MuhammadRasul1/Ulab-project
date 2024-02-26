import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CoursesInput } from "../CoursesInput";
import { useAddModalProps } from "./useAddModalProps";

export const AddModal = ({
    isOpen, 
    onClose,
    Title="Добавить",
    cancelText = "Отменить",
    submitText = "Сохранить",
    children
    }) => {

    const { register, handleSubmit, onSubmit } = useAddModalProps()
      
    return (
        <Box>
            <Modal size={"lg"} className={cls.modal} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader className={cls.title}>{Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl as='form'>
                        <CoursesInput 
                            label="Загрузить фото"
                            id="download_photo"
                            type="file"
                            register={register}
                            name="photo"
                            required
                        />
                        <CoursesInput 
                            label="Название курса"
                            id="name_course"
                            placeholder="Введите Название курса"
                            type="text"
                            register={register}
                            name="name"
                            required
                        />
                        <CoursesInput
                            label="Описание" 
                            id="desc_course"
                            placeholder="Введите описание"
                            type="text"
                            register={register}
                            name="for_who"
                            required
                        />
                        <CoursesInput
                            label="Повторяемость:" 
                            id="weekly_number"
                            placeholder="Введите повторяемость"
                            type="text"
                            register={register}
                            name="weekly_number"
                            required
                        />
                        <CoursesInput
                            label="Длительность урока:" 
                            id="duration"
                            placeholder="Введите длительность урока"
                            type="text"
                            register={register}
                            name="duration"
                            required
                        />
                        <CoursesInput
                            label="Сумма" 
                            id="price"
                            placeholder="Введите сумму"
                            type="text"
                            register={register}
                            name="price"
                            required
                        />
                        <CoursesInput
                            label="Дата начало" 
                            id="date"
                            placeholder="Введите сумму"
                            type="datetime-local"
                            register={register}
                            name="beginning_date_course"
                            required
                        />
                    </FormControl>
                    {/* {children} */}
                </ModalBody>
                <ModalFooter>
                    <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                        {cancelText}
                    </Button>
                    <Button onClick={handleSubmit(onSubmit)} backgroundColor="#0067F4" color="white">{submitText}</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}