import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import cls from "./styles.module.scss";
export const EditModal = ({
    isOpen, 
    onClose,
    Title="Изменить данные ученика",
    cancelText = "Отменить",
    submitText = "Изменить",
    DeleteBtn = "Удалить",
    handleAccept=() => {},
    handleDelete = () => {},
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

                <ModalFooter display="flex" justifyContent="space-between">
                    <Button onClick={handleDelete} backgroundColor="transparent" border="1px solid #CF0000" color="#CF0000">{DeleteBtn}</Button>
                    <Box>
                        <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>
                            {cancelText}
                        </Button>
                        <Button onClick={handleAccept} backgroundColor="teal" color="white">{submitText}</Button>
                    </Box>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}