import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

export const BtnNextStep = () => {

    return (
        <Box display="flex" flexDirection="column">
            <Link className={cls.link} to="/auth/RegisterDetail">Следующий шаг</Link>  
        </Box>
    )
}