import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { Input, InputPassword } from "../components/Inputs";
import { LogoAuth } from "../components/LogoAuth";
import { BtnSubmit } from "../components/BtnSubmit";
import { LinkPage } from "../components/LinkPage";
import { InputCheck } from "../components/InputCheck";
import { CopyRight } from "../components/CopyRight";


export const Login = () => {

  const { 
    onSubmit, 
    handleSubmit, 
    register, 
    isPending, 
    formState: { errors }, 
    show, 
    handleClick 
  } = useLoginProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Вход в платформу</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <Input
            label="Email или номер телефона"
            id="email"
            type="email"
            placeholder="Введите e-mail"
            src={EmailOutline}
            alt="email"
            {...register("login")}
            error={errors.email}
            required
          />

          <InputPassword
            label="Пароль"
            src={LockOpen}
            id="password"
            type={show ? 'text' : 'password'}
            placeholder="Введите пароль"
            {...register("password")} 
            error={errors.password}
          />
              

          <Box margin="8px 0 48px 0" display="flex" justifyContent="space-between">
            <InputCheck
             text="Запомнить меня"
             {...register("remember")}
             required
            />
            <Link className={cls.ForgotPassword} to="/auth/forgotPassword">Забыли пароль?</Link>
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