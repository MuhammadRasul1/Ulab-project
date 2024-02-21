import { useDisclosure } from "@chakra-ui/react"

export const useUsersTabProps = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return {
        isOpen,
        onOpen,
        onClose
    }
}