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
        <ol className={cls.list}>
            <li className={cls.item}>
                <p className={cls.numberBlue}>1</p>
            </li>
            <li className={cls.item}>
                <p className={cls.numberBlue}>2</p>
            </li>
            <li className={cls.item}>
                <p className={cls.numberBlue}>3</p>
            </li>
        </ol>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
            <InputPassword
                label="Придумайте пароль"
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