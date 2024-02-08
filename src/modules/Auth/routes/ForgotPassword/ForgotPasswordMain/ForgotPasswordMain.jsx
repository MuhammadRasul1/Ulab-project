import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useForgotPasswordMainProps } from "./useForgotPasswordMainProps";
import EmailOutline from "assets/img/icon/mail_outline.svg";
import { Input } from "../../components/Inputs";
import { LogoAuth } from "../../components/LogoAuth";
// import { BtnSubmit } from "../../components/BtnSubmit";
import { CopyRight } from "../../components/CopyRight";
import { Link } from "react-router-dom";


export const ForgotPasswordMain = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useForgotPasswordMainProps();

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
            {...register("login_name")}
            error={errors.email}
            required
          />
            
          <p className={cls.text}>Введите номер телефона чтобы получить код активации</p>

          <Box display="flex" flexDirection="column">
            {/* <BtnSubmit
              text="Получить код активации"
              disabled={isPending} 
            /> */}
            <Link className={cls.link} to="/auth/ForgotPasswordDetail">Получить код активации</Link>
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};