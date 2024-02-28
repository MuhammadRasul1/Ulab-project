import { Box, FormControl} from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useResetPasswordStep2Props } from "./useResetPasswordStep2Props";
import ActivationCode from "assets/img/icon/activationСode.svg"
import { BtnSubmit } from "../../../components/BtnSubmit";
import { CopyRight } from "../../../components/CopyRight";
import { LinkPage } from "modules/Auth/routes/components/LinkPage";
import { AuthInputPassword } from "modules/Auth/routes/components/AuthInputPassword";

export const ResetPasswordStep2 = () => {

  const { onSubmit, handleSubmit, register, checkCode, formState: { errors }, } = useResetPasswordStep2Props();

  return (
    <Box>
      <h1 className={cls.title}>Восстановление пароля</h1>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <AuthInputPassword
          label="Код активации"
          id="activationCode"
          src={ActivationCode}
          minLength={6}
          maxLength={6}
          alt="Код активации"
          placeholder="Введите код активации"
          register={register}
          name="verify_code" 
          error={errors.verify_code}
          required
        />
        <Box display="flex" flexDirection="column">
          <BtnSubmit
            text="Следующий шаг"
            disabled={checkCode.isPending} 
          />
          <LinkPage  
            text="Вернуться назад" 
            to="/auth/resetPassword" 
          />
        </Box>
        <Box marginTop="185px">
          <CopyRight />
        </Box>
      </FormControl>
    </Box>
  )
};