import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useRegisterStepThreeProps } from "./useRegisterStepThreeProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import { InputPassword } from "../../../components/Inputs";
import { LogoAuth } from "../../../components/LogoAuth";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "../../../components/BtnSubmit";

export const RegisterStepThree = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useRegisterStepThreeProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Пройдите регистрацию</h1>
        <Box className={cls.numberWrapper} display="flex" justifyContent="space-between" alignItems="center" marginBottom="32px">
          <span className={cls.number}>1</span>
          <span className={cls.number}>2</span>
          <span className={cls.number}>3</span>
        </Box>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
            <InputPassword
                label="Пароль"
                src={LockOpen}
                id="password"
                placeholder="Введите пароль"
                {...register("password")} 
                error={errors.password}
            />
            
            <InputPassword
                label="Подтвердите пароль"
                src={LockOpen}
                id="confirmPassword"
                placeholder="Подтвердите пароль"
                {...register("confirmPassword")} 
                error={errors.password}
            />

          <Box marginTop="32px" display="flex" flexDirection="column">
            <BtnSubmit 
              text="Зарегистрироваться"
              disabled={isPending}
            />
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};