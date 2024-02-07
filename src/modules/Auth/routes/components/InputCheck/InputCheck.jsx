import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const InputCheck = (props) => {
    return(
        <Box display="flex" alignItems="center">
            <input className={cls.checkbox} name="remember" type="checkbox" aria-label="remember" />
            <span className={cls.remember}>{props.text}</span>
        </Box>
    )
}