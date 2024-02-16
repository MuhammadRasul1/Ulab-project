import { Box, Button } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useProfileProps } from "./useProfileProps";
import { Container } from "components/Container";

export const Profile = () => {

    const { handleLogOut } = useProfileProps();

    return(
        <Box>
            <Container>
                <Button marginTop="30px" width="100px" background={"red"} color={"white"} onClick={handleLogOut}>LOG OUT</Button>
            </Container>
        </Box>
    )
}