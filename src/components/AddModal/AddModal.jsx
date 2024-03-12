import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
export const AddModal = ({
    isOpen, 
    onClose = () => {},
    Title="Добавить",
    cancelText = "Отменить",
    submitText = "Добавить",
    handleAccept = () => {}, 
    size,
    children
    }) => {

    return (
        <Box>
            <Modal size={size} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>{Title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>
                    <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3} onClick={onClose}>{cancelText}</Button>
                    <Button onClick={handleAccept} type="submit" backgroundColor="#0067F4" color="white">{submitText}</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}