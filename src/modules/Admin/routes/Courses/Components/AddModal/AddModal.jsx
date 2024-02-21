import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { InputCourses } from "../InputCourses";
import { InputFile } from "../InputFile";
import { InputDate } from "../InputDate";

export const AddModal = ({
    isOpen, 
    onClose,
    Title="Добавить",
    cancelText = "Отменить",
    submitText = "Сохранить",
    children
    }) => {
      
    return (
        <Box>
            <Modal size={"lg"} className={cls.modal} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader className={cls.title}>{Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl as='form'>
                        <InputFile 
                            label="Загрузить фото"
                            id="download_photo"
                            // {...register("download_photo")}
                        />
                        <InputCourses 
                            label="Название"
                            id="name_course"
                            type="text"
                            placeholder="Введите название"
                            // {...register("name")}
                        />
                        <InputCourses 
                            label="Описание"
                            id="description_course"
                            type="text"
                            placeholder="Введите описание"
                            // {...register("for_who")}
                        />
                        <InputCourses 
                            label="Повтояемость:"
                            id="weekly_number"
                            type="text"
                            placeholder="Повторяемость"
                            // {...register("weekly_number")}
                        />
                        <InputCourses 
                            label="Длительность урока"
                            id="duration"
                            type="number"
                            placeholder="Длительность урока"
                            // {...register("duration")}
                        />
                        <InputCourses 
                            label="Сумма"
                            id="price"
                            type="number"
                            placeholder="Сумма"
                            // {...register("price")}
                        />
                        <InputDate 
                            label="Дата начало"
                            id="data_start"
                            // {...register("data_start")}
                        />
                    </FormControl>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                        {cancelText}
                    </Button>
                    <Button backgroundColor="#0067F4" color="white">{submitText}</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}