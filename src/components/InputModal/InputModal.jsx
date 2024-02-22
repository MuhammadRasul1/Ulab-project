import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const InputModal = ({name, register = () => {}, placeholder, type, ariaLabel, id, ...props}) => {

    return(
        <input
            className={cls.input} 
            type={type} 
            id={id}
            placeholder={placeholder}
            aria-label={ariaLabel}
            {...register(name)}
            {...props}
        />
    )
}