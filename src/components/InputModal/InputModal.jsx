import { FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const InputModal = (props) => {

    return(
        <FormControl className={cls.form} as="form">
            <input
                className={cls.input} 
                type={props.type} 
                id={props.id}
                placeholder={props.placeholder}
                aria-label={props.ariaLabel} 
            />
        </FormControl>
    )
}