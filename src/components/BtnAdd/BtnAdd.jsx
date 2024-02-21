import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const BtnAdd = (props) => {

    return (
        <Box onClick={() => props.onClick()} className={cls.wrapper}>
            <span className={cls.plus}>+</span>
            <button className={cls.btn}>Добавить</button>
        </Box>
    )
}