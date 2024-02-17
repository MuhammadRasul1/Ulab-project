import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useForgotPasswordStepTwoProps } from "./useForgotPasswordStepTwoProps";
import { InputPassword } from "../../../components/Inputs";
import ActivationCode from "assets/img/icon/activationСode.svg"
import { LogoAuth } from "../../../components/LogoAuth";
import { BtnSubmit } from "../../../components/BtnSubmit";
import { CopyRight } from "../../../components/CopyRight";
import { LinkPage } from "modules/Auth/routes/components/LinkPage";
// import { SendAgain } from "../../components/SendAgain";


export const ForgotPasswordStepTwo = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useForgotPasswordStepTwoProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Восстановление пароля</h1>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">

          <InputPassword
            label="Код активации"
            src={ActivationCode}
            id="activationCode"
            minLength={6}
            maxLength={6}
            placeholder="Введите код активации"
            {...register("verify_code")} 
            error={errors.password}
          />

          {/* <SendAgain onSubmit={handleSubmit(onSubmit)} /> */}

          <Box display="flex" flexDirection="column">
            <BtnSubmit
              text="Следующий шаг"
              disabled={isPending} 
            />
            <LinkPage  
              text="Вернуться назад" 
              to="/auth/forgotPassword" 
            />
          </Box>

          <Box marginTop="185px">
            <CopyRight />
          </Box>
        </FormControl>
       </Box>
    </Box>
  )
};