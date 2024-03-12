import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";

export const Device = () => {
    return (
        <Box className={cls.device}>
            <Container>
                <h1 className={cls.title}>Активные устройства</h1>
                <p className={cls.desc}>Вы одновременно можете входить с двух устройств. Если вы желаете зайтис 3-го устройства, вы должны выйти из одного  из двух </p>
            </Container>
        </Box>
    )
}