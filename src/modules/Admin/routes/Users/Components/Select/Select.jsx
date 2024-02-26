import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Select = () => {
    return (
        <Box className={cls.wrapper}>
            <select className={cls.select} name="user_type" id="select">
                <option value="Student">Студент</option>
                <option value="Mentor">Ментор</option>
            </select>
        </Box>
    );
}