import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";
import { BtnDownload } from "components/BtnDownload";
import { AddModal } from "components/AddModal";
import { useHeaderProps } from "./useHeaderProps";
import { Input } from "components/Input";
import { Select } from "components/Select";

export const Header = () => {

  const { handleSubmit, onSubmit, register, isOpen, onClose, onOpen } = useHeaderProps();

  return (
    <header className={cls.header}>
      <Container >
        <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
          <FormControl as='form'>
            <Box className={cls.wrapper}>
                <Input
                    type="text"
                    placeholder="Имя"
                    register={register}
                    name="first_name"  
                />
            </Box>
            <Box className={cls.wrapper}>
                <Input
                    type="text"
                    placeholder="Фамилия"
                    register={register}
                    name="last_name"
                />
            </Box>
            <Box className={cls.wrapper}>
                <Input
                    type="number"
                    placeholder="Номер телефона"
                    register={register}
                    name="phone_number" 
                />
            </Box>
            <Box className={cls.wrapper}>
                <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email"  
                />
            </Box>
            <Box className={cls.wrapper}>
                <Input
                    type="password"
                    placeholder="Пароль"
                    register={register}
                    name="password"
                />
            </Box>
            <Box className={cls.wrapper}>
                <Select 
                    register={register}
                    name="user_type"
                    id={"user_type"}
                    text1="Студент"
                    text2="Ментор"
                    value1="Student"
                    value2="Mentor"
                />
            </Box>
          </FormControl>
        </AddModal>
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
          <h1 className={cls.title}>Пользователи</h1>
          <Box display="flex" alignItems="start">
            <BtnDownload /> 
            <SearchInput className={cls.searchInput}/>
            <Filter />
            <BtnAdd className={cls.btnAdd} onClick={onOpen}/>
          </Box>
        </Box>
      </Container>
    </header>
  ) 

};
