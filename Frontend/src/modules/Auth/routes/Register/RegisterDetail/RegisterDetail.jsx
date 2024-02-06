import { Box, FormControl, InputGroup, InputRightElement } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import AuthImg from "assets/img/auth-img.png"
import { Link } from "react-router-dom";
import { useRegisterDetailProps } from "./useRegisterDetailProps";
import Eye from "assets/img/icon/Eye.svg";
import LockOpen from "assets/img/icon/lock_open.svg";
import { Input } from "../../components/Input";

export const RegisterDetail = () => {

  const { show, handleClick, onSubmit, handleSubmit, register, isPending, formState: { errors }, } = useRegisterDetailProps();

  return (
    <Box className={cls.wrapper}>

      <Box className={cls.wrapperLeft}>
        <h2 className={cls.subtitle}>Learning Management system</h2>
        <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
      </Box>

      <Box className={cls.wrapperRight}>
        <h1 className={cls.title}>Пройдите регистрацию</h1>
        <Box className={cls.numberWrapper} display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
          <span className={cls.number}>1</span>
          <span className={cls.number}>2</span>
        </Box>
        <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">

          <Box className={cls.formWrapper}>
            <label className={cls.label} htmlFor="password">
                Код потвреждения 
            </label>
            <Box className={cls.inputWrapper}>
              <InputGroup size='md'>
                <img src={LockOpen} alt="lock_open" width={24} height={24} />
                <Input
                  className={cls.input}
                  id="password"
                  pr='4.5rem'
                  type={show ? 'text' : 'password'}
                  {...register("password")}
                  placeholder='Введите код'
                  error={errors.password}
                />
                <InputRightElement width='4.5rem'>
                  <button className={cls.btnEye} type='button'  onClick={handleClick}>
                    <img src={show ? Eye : Eye} alt="eye" width={24} height={24} />
                  </button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </Box>

          <Box margin="32px 0" display="flex" alignItems="center">
            <input className={cls.checkbox} name="rememberMe" type="checkbox" />
            <span className={cls.rememberMe}>Нажимая кнопку «Зарегистрироваться», вы даёте согласие на обработку данных</span>
          </Box>
          

          <Box display="flex" flexDirection="column">
            <button disabled={isPending} type="submit" className={cls.btnSubmit}>Зарегистрироваться </button> 
          </Box>

          <span className={cls.textCopy}>Copyright © URecruit. Все права защищены</span>
        </FormControl>
       </Box>
    </Box>
  )
};



// import { Box, FormControl, InputGroup, InputRightElement } from "@chakra-ui/react";
// import cls from "./styles.module.scss";
// import AuthImg from "assets/img/auth-img.png"
// import { useRegisterDetailProps } from "./useRegisterDetailProps";
// import Eye from "assets/img/icon/Eye.svg";
// import LockOpen from "assets/img/icon/lock_open.svg";
// import { Input } from "../../components/Input";

// export const RegisterDetail = () => {

//   const { onSubmit, show, handleClick, isPending, handleSubmit, register, formState: { errors }, } = useRegisterDetailProps();

//   return (
//     <Box className={cls.wrapper}>

//       <Box className={cls.wrapperLeft}>
//         <h2 className={cls.subtitle}>Learning Management system</h2>
//         <img src={AuthImg} alt="Learning Management system" width={672} height={448}/>
//       </Box>

//       <Box className={cls.wrapperRight}>
//         <h1 className={cls.title}>Пройдите регистрацию</h1>
//         <Box className={cls.numberWrapper} display="flex" justifyContent="space-between" alignItems="center" marginBottom="16px">
//           <span className={cls.number}>1</span>
//           <span className={cls.number}>2</span>
//         </Box>
//         <FormControl onSubmit={handleSubmit(onSubmit)} width="592px" as="form">
//             <Box className={cls.inputWrapper}>
//                 <InputGroup size='md'>
//                     <img src={LockOpen} alt="lock_open" width={24} height={24} />
//                     <Input
//                     className={cls.input}
//                     id="password"
//                     pr='4.5rem'
//                     type={show ? 'text' : 'password'}
//                     {...register("password")}
//                     placeholder='Введите пароль'
//                     error={errors.password}
//                     required
//                     />
//                     <InputRightElement width='4.5rem'>
//                     <button className={cls.btnEye} type='button'  onClick={handleClick}>
//                         <img src={show ? Eye : Eye} alt="eye" width={24} height={24} />
//                     </button>
//                     </InputRightElement>
//                 </InputGroup>
//             </Box>

//           <Box display="flex" flexDirection="column">
//             <button className={cls.link}>Следующий шаг</button>  
//           </Box>

//           <span className={cls.textCopy}>Copyright © URecruit. Все права защищены</span>
//         </FormControl>
//        </Box>
//     </Box>
//   )
// };