import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import LockOpen from "assets/img/icon/lock_open.svg";
import { InputPassword } from "../../../components/Inputs";
import { LogoAuth } from "../../../components/LogoAuth";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "../../../components/BtnSubmit";
import { InputCheck } from "../../../components/InputCheck";
import { useForgotPasswordStepThreeProps } from "./useForgotPasswordStepThreeProps";

export const ForgotPasswordStepThree = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useForgotPasswordStepThreeProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Восстановление пароля</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
            <InputPassword
                label="Новый пароль"
                src={LockOpen}
                id="password"
                placeholder="Введите новый пароль"
                {...register("password")} 
                error={errors.password}
            />
            
            <InputPassword
                label="Подтвердите пароль"
                src={LockOpen}
                id="confirmPassword"
                placeholder="Подтвердите пароль"
                {...register("confirm_password")} 
                error={errors.password}
            />

            <InputCheck 
              text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных"
            />

          <Box marginTop="32px" display="flex" flexDirection="column">
            <BtnSubmit 
              text="Восстановить пароль"
              disabled={isPending}
            />
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};