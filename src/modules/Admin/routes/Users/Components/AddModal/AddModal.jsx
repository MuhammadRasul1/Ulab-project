import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
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