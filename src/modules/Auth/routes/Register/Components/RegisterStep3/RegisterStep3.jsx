import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useRegisterStep3Props } from "./useRegisterStep3Props";
import LockOpen from "assets/img/icon/lock_open.svg";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "../../../components/BtnSubmit";
import { LinkPage } from "modules/Auth/routes/components/LinkPage";
import { CheckInput } from "modules/Auth/routes/components/CheckInput";
import { AuthInputPassword } from "modules/Auth/routes/components/AuthInputPassword";

export const RegisterStep3 = () => {

  const { onSubmit, handleSubmit, register, authRegister, formState: { errors }, } = useRegisterStep3Props();

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
              <p className={cls.numberBlue}>3</p>
          </li>
      </ol>
      <FormControl onSubmit={handleSubmit(onSubmit)} as="form">
        <AuthInputPassword
          label="Придумайте пароль"
          id="password"
          src={LockOpen}
          alt="lockOpen"
          placeholder="Введите пароль"
          register={register}
          name="password" 
          error={errors.password}
          required
        />
        <AuthInputPassword
          label="Повторите пароль"
          id="confirmPassword"
          src={LockOpen}
          alt="lockOpen"
          placeholder="Повторите пароль"
          register={register}
          name="confirmPassword" 
          error={errors.confirmPassword}
          required
        />
        <CheckInput 
          text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных"
        />
        <Box marginTop="32px" display="flex" flexDirection="column">
          <BtnSubmit 
            text="Зарегистрироваться"
            disabled={authRegister.isPending}
          />
          <LinkPage 
            text="Вернуться назад"
            to="/auth/register/Step2"
          />
        </Box>
        <CopyRight />
      </FormControl>
    </Box>
  )
};