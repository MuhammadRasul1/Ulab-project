import { Box, Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Input } from "components/Input";
import { Select } from "../Select";
import { useAddModalProps } from "./useAddModalProps";
export const AddModal = ({
    isOpen, 
    onClose = () => {},
    Title="Добавить",
    cancelText = "Отменить",
    submitText = "Сохранить",
    }) => {

    const { handleSubmit, onSubmit, register,} = useAddModalProps(onClose)
      
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
                            <Input
                                type="text"
                                placeholder="Имя"
                                register={register}
                                name="first_name"  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Input
                                type="text"
                                placeholder="Фамилия"
                                register={register}
                                name="last_name"
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Input
                                type="number"
                                placeholder="Номер телефона"
                                register={register}
                                name="phone_number" 
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Input
                                type="email"
                                placeholder="Email"
                                register={register}
                                name="email"  
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Input
                                type="password"
                                placeholder="Пароль"
                                register={register}
                                name="password"
                            />
                        </Box>
                        <Box className={cls.wrapper}>
                            <Select 
                                register={register}
                                name="user_type"
                            />
                        </Box>
                    </FormControl>
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