import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import UserAvatar from "assets/img/icon/userAvatar.svg"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { useRegisterProps } from "./useRegisterProps";
import { Input } from "../../components/Inputs";
import { Link } from "react-router-dom";
import { LogoAuth } from "../../components/LogoAuth";
import { CopyRight } from "../../components/CopyRight";
import { StepList } from "../../components/StepList";
import { BtnNextStep } from "../../components/BtnNextStep";

export const RegisterMain = () => {

  const { onSubmit, handleSubmit, register, formState: { errors }, } = useRegisterProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Пройдите регистрацию</h1>
        <StepList />
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <Input 
            label="Ваше Ф.И.О"
            id="userName"
            type="text"
            placeholder="Введите Ф.И.О"
            src={UserAvatar}
            {...register("register_name")}
            error={errors.name}
            required
          />

          <Input
            label="Укажите e-mail"
            id="email"
            type="email"
            placeholder="Введите e-mail"
            src={EmailOutline}
            {...register("register_email")}
            error={errors.email}
            required
          />

          <BtnNextStep />

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};