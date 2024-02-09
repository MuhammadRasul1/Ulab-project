import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import UserAvatar from "assets/img/icon/userAvatar.svg"
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { useRegisterProps } from "./useRegisterProps";
import { Input } from "../../components/Inputs";
import { LogoAuth } from "../../components/LogoAuth";
import { CopyRight } from "../../components/CopyRight";
import { BtnNextStep } from "../../components/BtnNextStep";


export const RegisterMain = () => {

  const { onSubmit, handleSubmit, register, formState: { errors }, } = useRegisterProps();

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
          <Input 
            label="Фамилия"
            id="lastname"
            type="text"
            placeholder="Введите фамилию"
            src={UserAvatar}
            {...register("last_name")}
            error={errors.name}
            required
          />

          <Input 
            label="Имя"
            id="name"
            type="text"
            placeholder="Введите имя"
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

          <BtnNextStep
            to="/auth/register/RegisterStepTwo"
          />

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};