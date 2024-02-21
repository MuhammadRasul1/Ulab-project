import cls from './styles.module.scss';
import { Box, Input } from '@chakra-ui/react';

export const InputDate = (props) => {
    return (
        <Box className={cls.wrapper}>
            <label 
                className={cls.label} 
                htmlFor={props.id}
            >
            {props.label}
            </label>

            <Input
                className={cls.input}
                id={props.id}
                placeholder={props.placeholder} 
                size={props.size}
                type="datetime-local"
            />
        </Box>
    )
}
        