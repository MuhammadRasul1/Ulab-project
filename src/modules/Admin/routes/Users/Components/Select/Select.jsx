import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Select = ({register = () => {}, name}) => {
    return (
        <Box className={cls.wrapper}>
            <select className={cls.select}  {...register(name)} id="user_type">
                <option value="Student">Студент</option>
                <option value="Mentor">Ментор</option>
            </select>
        </Box>
    );
}