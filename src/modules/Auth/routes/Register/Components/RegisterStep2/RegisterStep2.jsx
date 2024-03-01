import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "modules/Auth/routes/components/BtnSubmit";
import ActivationCode from "assets/img/icon/activationСode.svg"
import { LinkPage } from "modules/Auth/routes/components/LinkPage";
import { useRegisterStep2Props } from "./useRegisterStep2Props";
import { AuthInputPassword } from "modules/Auth/routes/components/AuthInputPassword";

export const RegisterStep2 = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useRegisterStep2Props();

  return (
    <Box>
      <h1 className={cls.title}>Пройдите регистрацию</h1>
      <ol className={cls.list}>
          <li className={cls.item}>
              <p className={cls.numberBlue}>1</p>
          </li>
          <li className={cls.item}>
              <p className={cls.numberBlue}>2</p>
          </li>
          <li className={cls.item}>
              <p className={cls.number}>3</p>
          </li>
      </ol>
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
        <Box marginTop="32px" display="flex" flexDirection="column">
          <BtnSubmit
            text="Следующий шаг"
            disabled={isPending} 
          />
          <LinkPage 
            text="Вернуться назад"
            to="/auth/register"
          />
        </Box>
        <Box marginTop="90px">
          <CopyRight />
        </Box>
      </FormControl>
    </Box>
  )
};