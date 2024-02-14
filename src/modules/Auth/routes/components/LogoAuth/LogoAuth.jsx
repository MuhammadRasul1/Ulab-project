import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"

export const LogoAuth = () => {
    return (
        <Box className={cls.wrapper}>
            <h2 className={cls.title}>Learning Management system</h2>
            <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
        </Box>
    )
}