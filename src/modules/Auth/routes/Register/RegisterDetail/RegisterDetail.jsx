import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useRegisterDetailProps } from "./useRegisterDetailProps";
import LockOpen from "assets/img/icon/lock_open.svg";
import { InputPassword } from "../../components/Inputs";
import { LogoAuth } from "../../components/LogoAuth";
import { InputCheck } from "../../components/InputCheck";
import { CopyRight } from "../../components/CopyRight";
import { BtnSubmit } from "../../components/BtnSubmit";

export const RegisterDetail = () => {

  const { onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useRegisterDetailProps();

  return (
    <Box className={cls.wrapper}>
      <LogoAuth />

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Пройдите регистрацию</h1>
        <Box className={cls.numberWrapper} display="flex" justifyContent="space-between" alignItems="center" marginBottom="32px">
          <span className={cls.number}>1</span>
          <span className={cls.number}>2</span>
        </Box>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
          <InputPassword
            label="Код потвреждения "
            src={LockOpen}
            id="confirmationСode"
            minLength={3}
            placeholder="Введите код потвреждения "
            {...register("password")} 
            error={errors.password}
          />

          <InputCheck 
            text="Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных"
          />

          <Box marginTop="32px" display="flex" flexDirection="column">
            <BtnSubmit 
              text="Зарегистрироваться"
              disabled={isPending}
            />
          </Box>

          <CopyRight />
        </FormControl>
       </Box>
    </Box>
  )
};