import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

export const BtnNextStep = (props) => {

    return (
        <Box display="flex" flexDirection="column">
            <Link className={cls.link} to={props.to}>Следующий шаг</Link>  
        </Box>
    )
}