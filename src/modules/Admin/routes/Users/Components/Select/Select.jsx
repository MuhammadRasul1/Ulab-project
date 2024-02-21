import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Select = () => {
    return (
        <Box className={cls.wrapper}>
            <select className={cls.select} name="select" id="select">
                <option value="student">Студент</option>
                <option value="mentor">Ментор</option>
            </select>
        </Box>
    );
}