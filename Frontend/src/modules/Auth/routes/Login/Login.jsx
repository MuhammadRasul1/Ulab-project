import { Box, Button, FormControl, FormLabel, Heading, InputGroup, InputRightElement } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import LockOpen from "assets/img/icon/lock_open.svg";
import { Link } from "react-router-dom";
import { useLoginProps } from "./useLoginProps";
import { Input } from "components/Input";
import Eye from "assets/img/icon/Eye.svg"

export const Login = () => {

  const { show, handleClick, onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useLoginProps();

  return (
    <Box className={cls.wrapper}>

      <Box className={cls.wrapperLeft}>
        <h2 className={cls.subtitle}>Learning Management system</h2>
        <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
      </Box>

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Вход в платформу</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <Box className={cls.formWrapper}>
            <label className={cls.label} htmlFor="email">
              Email или номер телефона 
              <span className={cls.required}>*</span>
            </label>
            <Box className={cls.inputWrapper}>
              <img src={EmailOutline} alt="email_outline" width={24} height={24}/>
              <Input
                className={cls.input}
                type='text'
                id="email"
                error={errors.email} 
                placeholder="Введите e-mail" 
                {...register("login_name")}
                required 
              />
            </Box>
          </Box>

          <Box className={cls.formWrapper}>
            <label className={cls.label} htmlFor="password">
              Пароль
              <span className={cls.required}>*</span> 
            </label>
            <Box className={cls.inputWrapper}>
              <InputGroup size='md'>
                <img src={LockOpen} alt="lock_open" width={24} height={24} />
                <Input
                  className={cls.input}
                  id="password"
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  {...register("password")}
                  placeholder='Введите пароль'
                  error={errors.password}
                  required
                />
                <InputRightElement width='4.5rem'>
                  <button className={cls.btnEye}  onClick={handleClick}>
                    <img src={show ? Eye : Eye} alt="eye" width={24} height={24} />
                  </button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Link className={cls.ForgotPassword} to="/auth/forgotPassword">Забыли пароль?</Link>
          </Box>

          <Box display="flex" flexDirection="column">
            <button disabled={isPending} type="submit" className={cls.btnSubmit}>Войти</button>
            <Link className={cls.registerLink} to="/auth/register">Зарегистрироваться</Link>  
          </Box>

          <span className={cls.text}>Copyright © URecruit. Все права защищены</span>
        </FormControl>
       </Box>
    </Box>
  )
};