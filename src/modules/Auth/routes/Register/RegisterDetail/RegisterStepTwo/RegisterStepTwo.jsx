import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useRegisterStepTwoProps } from "./useRegisterStepTwoProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import { InputPassword } from "../../../components/Inputs";
import { LogoAuth } from "../../../components/LogoAuth";
import { InputCheck } from "../../../components/InputCheck";
import { CopyRight } from "../../../components/CopyRight";
import { BtnSubmit } from "modules/Auth/routes/components/BtnSubmit";

export const RegisterStepTwo = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useRegisterStepTwoProps();

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
                <p className={cls.numberBlue}>2</p>
            </li>
            <li className={cls.item}>
                <p className={cls.number}>3</p>
            </li>
        </ol>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <InputPassword
            label="Код потвреждения "
            src={LockOpen}
            id="confirmationСode"
            minLength={6}
            maxLength={6}
            placeholder="Введите код потвреждения "
            {...register("request_id")} 
            error={errors.password}
          />

          <InputCheck 
            text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных"
          />

          <Box marginTop="32px" display="flex" flexDirection="column">
            <BtnSubmit
              text="Следующий шаг"
              disabled={isPending} 
            />
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};