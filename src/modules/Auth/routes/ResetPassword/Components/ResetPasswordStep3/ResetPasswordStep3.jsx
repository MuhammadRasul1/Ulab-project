import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import LockOpen from "assets/img/icon/lock_open.svg";
import { LogoAuth } from "../../../components/LogoAuth";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "../../../components/BtnSubmit";
import { CheckInput } from "../../../components/CheckInput";
import { LinkPage } from "modules/Auth/routes/components/LinkPage";
import { AuthInputPassword } from "modules/Auth/routes/components/AuthInputPassword";
import { useResetPasswordStep3Props } from "./useResetPasswordStep3Props";

export const ResetPasswordStep3 = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useResetPasswordStep3Props();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Восстановление пароля</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
        <AuthInputPassword
            label="Новый пароль"
            id="password"
            src={LockOpen}
            alt="lockOpen"
            placeholder="Введите новый пароль"
            register={register}
            name="password" 
            error={errors.password}
            required
          />

          <AuthInputPassword
            label="Повторите пароль"
            id="confirmPassword"
            src={LockOpen}
            alt="lockOpen"
            placeholder="Повторите пароль"
            register={register}
            name="confirmPassword" 
            error={errors.confirmPassword}
            required
          />

          <CheckInput 
            text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных"
          />

          <Box marginTop="32px" display="flex" flexDirection="column">
            <BtnSubmit 
              text="Восстановить пароль"
              disabled={isPending}
            />
             <LinkPage  
              text="Вернуться назад" 
              to="/auth/forgotPassword/forgotPasswordStepTwo" 
            />
          </Box>

          <Box marginTop="10px">
            <CopyRight />
          </Box>
        </FormControl>
       </Box>
    </Box>
  )
};