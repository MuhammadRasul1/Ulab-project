import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useForgotPasswordDetailProps } from "./useForgotPasswordDetailProps";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { Input, InputPassword } from "../../components/Inputs";
import ActivationCode from "assets/img/icon/activationСode.svg"
import { LogoAuth } from "../../components/LogoAuth";
import { BtnSubmit } from "../../components/BtnSubmit";
import { CopyRight } from "../../components/CopyRight";


export const ForgotPasswordDetail = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useForgotPasswordDetailProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Восстановление пароля</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <Input
            label="Email или номер телефона"
            id="email"
            type="text"
            placeholder="Введите e-mail"
            src={EmailOutline}
            // {...register("login_name")}
            error={errors.email}
            required
          />

          <InputPassword
            label="Код активации"
            src={ActivationCode}
            id="activationCode"
            placeholder="Введите код активации"
            // {...register("password")} 
            error={errors.password}
          />

          <button className={cls.btn} type="button">Отправить код еще раз</button>

          <Box display="flex" flexDirection="column">
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