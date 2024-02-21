import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { InputModal } from "components/InputModal";
import { Select } from "../Select";
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
            <Modal className={cls.modal} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader className={cls.title}>{Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl as='form'>
                        <Box className={cls.wrapper}>
                            <InputModal
                                type="text"
                                placeholder="Имя"
                                // {...register("first_name")}  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <InputModal
                                type="text"
                                placeholder="Фамилия"
                                // {...register("last_name")}  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <InputModal
                                type="number"
                                placeholder="Номер телефона"
                                // {...register("phone_number")}  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <InputModal
                                type="email"
                                placeholder="Email"
                                // {...register("email")}  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <InputModal
                                type="password"
                                placeholder="Пароль"
                                // {...register("email")}  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Select />
                        </Box>
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