import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { InputModal } from "components/InputModal";
export const EditModal = ({
    isOpen, 
    onClose,
    Title="Изменить данные ученика",
    cancelText = "Отменить",
    submitText = "Сохранить",
    DeleteBtn = "Удалить",
    register
    }) => {
      
    return (
        <Box>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader className={cls.title}>{Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <InputModal
                        type="text"
                        name="first_name"
                        placeholder="Имя"
                        {...register("first_name")}  
                    />
                    <InputModal
                        type="text"
                        name="last_name"
                        placeholder="Фамилия"
                        {...register("last_name")}  
                    />
                    <InputModal
                        type="number"
                        name="phone_number"
                        placeholder="Номер телефона"
                        {...register("phone_number")}  
                    />
                    <InputModal
                        type="email"
                        name="email"
                        placeholder="Email"
                        {...register("email")}  
                    />
                </ModalBody>

                <ModalFooter display="flex" justifyContent="space-between">
                    <Button backgroundColor="transparent" border="1px solid #CF0000" color="#CF0000">{DeleteBtn}</Button>
                    <Box>
                        <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                            {cancelText}
                        </Button>
                        <Button backgroundColor="#0067F4" color="white">{submitText}</Button>
                    </Box>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}