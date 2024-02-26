import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useResetPasswordProps } from "./useResetPasswordProps";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { LogoAuth } from "../components/LogoAuth";
import { CopyRight } from "../components/CopyRight";
import { BtnSubmit } from "../components/BtnSubmit";
import { LinkPage } from "../components/LinkPage";
import { AuthInput } from "../components/AuthInput";


export const ResetPassword = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useResetPasswordProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Восстановление пароля</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <AuthInput
            label="Email или номер телефона"
            id="email"
            type="email"
            placeholder="Введите e-mail"
            src={EmailOutline}
            alt="email"
            register={register}
            name="email"
            error={errors.email}
            required
          />
            
          <p className={cls.text}>Введите номер телефона чтобы получить код активации</p>

          <Box display="flex" flexDirection="column">
            <BtnSubmit
              text="Получить код активации"
              disabled={isPending} 
            />
            <LinkPage 
              text="Войти в аккаунт" 
              to="/auth/login" 
            />
          </Box>

          <Box marginTop="125px">
            <CopyRight />
          </Box>
        </FormControl>
       </Box>
    </Box>
  )
};