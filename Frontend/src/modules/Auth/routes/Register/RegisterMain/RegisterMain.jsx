import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"
import UserAvatar from "assets/img/icon/userAvatar.svg"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { useRegisterProps } from "./useRegisterProps";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const RegisterMain = () => {

  const { onSubmit, handleSubmit, register, formState: { errors }, } = useRegisterProps();

  return (
    <Box className={cls.wrapper}>

      <Box className={cls.wrapperLeft}>
        <h2 className={cls.subtitle}>Learning Management system</h2>
        <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
      </Box>

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Пройдите регистрацию</h1>
        <Box className={cls.numberWrapper} display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
          <span className={cls.number}>
            1
          </span>
          <span className={cls.number}>2</span>
        </Box>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <Box className={cls.formWrapper}>
            <label className={cls.label} htmlFor="name">
              Ваше Ф.И.О 
              <span className={cls.required}>*</span>
            </label>
            <Box className={cls.inputWrapper}>
              <img src={UserAvatar} alt="userAvatar" width={16} height={16}/>
              <Input
                className={cls.input}
                type='text'
                id="name"
                error={errors.email} 
                placeholder="Введите Ф.И.О" 
                {...register("register_name")}
                required 
              />
            </Box>
          </Box>
          <Box className={cls.formWrapper}>
            <label className={cls.label} htmlFor="email">
              Укажите e-mail 
              <span className={cls.required}>*</span>
            </label>
            <Box className={cls.inputWrapper}>
              <img src={EmailOutline} alt="email_outline" width={24} height={24}/>
              <Input
                className={cls.input}
                type='email'
                id="email"
                error={errors.email} 
                placeholder="Введите e-mail" 
                {...register("register_email")}
                required 
              />
            </Box>
          </Box>

          <Box display="flex" flexDirection="column">
            <Link className={cls.link} to="/auth/RegisterDetail">Следующий шаг</Link>  
          </Box>

          <span className={cls.textCopy}>Copyright © URecruit. Все права защищены</span>
        </FormControl>
       </Box>
    </Box>
  )
};