import React from "react"
import cls from "./styles.module.scss"
import clsx from "clsx"
import { Box } from "@chakra-ui/react"
import Error from "assets/img/icon/error.svg"

export const Input = React.forwardRef((props, ref) => {
    const { error, ...rest } = props

    return (
        <Box display="flex" flexDirection="column">
            <input
                className={clsx(cls.input, { [cls.error]: !!error?.message })}
                {...rest}
                ref={ref}
                />
            {error?.message && 
             <Box display="flex" alignItems="center" marginTop="8px">
                <img src={Error} alt="error" width={16} height={16}/>
                <p style={{ color: 'red', marginLeft: '8px' }}>{error?.message}</p>
             </Box>}
        </Box>
    )
})

Input.displayName = "Input"