import React from "react"
import cls from "./styles.module.scss"
import clsx from "clsx"
import { Box } from "@chakra-ui/react"

export const Input = React.forwardRef((props, ref) => {
    const { error, ...rest } = props

    return (
        <Box display="flex" flexDirection="column">
            <input
                className={clsx(cls.input, { [cls.error]: !!error?.message })}
                {...rest}
                ref={ref}
                />
            {error?.message && <p style={{ color: 'red' }}>{error?.message}</p>}
        </Box>
    )
})

Input.displayName = "Input"