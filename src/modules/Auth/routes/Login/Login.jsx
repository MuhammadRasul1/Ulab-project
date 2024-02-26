import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { LogoAuth } from "../components/LogoAuth";
import { BtnSubmit } from "../components/BtnSubmit";
import { LinkPage } from "../components/LinkPage";
import { CheckInput } from "../components/CheckInput";
import { CopyRight } from "../components/CopyRight";
import { AuthInputPassword } from "../components/AuthInputPassword";
import { AuthInput } from "../components/AuthInput";


export const Login = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    isPending, 
    formState: { errors }, 
  } = useLoginProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Вход в платформу</h1>
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

          <AuthInputPassword
            label="Пароль"
            id="password"
            src={LockOpen}
            alt="lockOpen"
            placeholder="Введите пароль"
            register={register}
            name="password" 
            error={errors.password}
            required
          />
              
          <Box margin="8px 0 48px 0" display="flex" justifyContent="space-between">
            <CheckInput
             text="Запомнить меня"
            //  register={register}
             name="rememberMe" 
             required
            />
            <Link className={cls.ForgotPassword} to="/auth/resetPassword">Забыли пароль?</Link>
          </Box>

          <Box display="flex" flexDirection="column">
            <BtnSubmit
              text="Войти"
              disabled={isPending} 
            />
            
            <LinkPage
             text="Зарегистрироваться"
             to="/auth/register"
            /> 
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};