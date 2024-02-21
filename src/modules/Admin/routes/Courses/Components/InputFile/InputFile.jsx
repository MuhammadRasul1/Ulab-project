import { Box } from '@chakra-ui/react';
import cls from './styles.module.scss';

export const InputFile = (props) => {
    return (
        <Box className={cls.wrapper}>
            <label 
                className={cls.label} 
                htmlFor={props.id}
            >
            {props.label}
            </label>

            <input
                className={cls.input}
                type="file"
                id={props.id}
                placeholder={props.placeholder} 
            />
        </Box>
    )
}    