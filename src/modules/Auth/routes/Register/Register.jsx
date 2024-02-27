import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import UserAvatar from "assets/img/icon/userAvatar.svg"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { LogoAuth } from "../components/LogoAuth";
import { CopyRight } from "../components/CopyRight";
import { BtnSubmit } from "../components/BtnSubmit";
import { useRegisterProps } from "./useRegisterProps";
import { LinkPage } from "../components/LinkPage";
import { AuthInput } from "../components/AuthInput";

export const Register = () => {

  const { onSubmit, handleSubmit, register, formState: { errors }, checkEmail } = useRegisterProps();

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
                <p className={cls.number}>2</p>
            </li>
            <li className={cls.item}>
                <p className={cls.number}>3</p>
            </li>
        </ol>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <AuthInput
            label="Имя"
            id="name"
            type="text"
            placeholder="Введите имя"
            src={UserAvatar}
            alt="userAvatar"
            register={register}
            name="first_name"
            error={errors.first_name}
            required
          />
          
          <AuthInput
            label="Фамилия"
            id="lastName"
            type="text"
            placeholder="Введите фамилию"
            src={UserAvatar}
            alt="userAvatar"
            register={register}
            name="last_name"
            error={errors.last_name}
            required
          />

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

          <Box display="flex" flexDirection="column">
            <BtnSubmit
              text="Получить код активации"
              disabled={checkEmail.isPending} 
            />
            <LinkPage 
              text="Войти в аккаунт"
              to="/auth/login"
            />
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};