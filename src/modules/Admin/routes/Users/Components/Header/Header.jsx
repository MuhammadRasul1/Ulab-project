import { Box, FormControl, useDisclosure } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";
import { BtnDownload } from "components/BtnDownload";
import { AddModal } from "components/AddModal";
import { Input } from "components/Input";
import { Select } from "components/Select";

export const Header = ({
  // onOpen = () => {},
  // isOpen, 
  // onClose = () => {}, 
  handleSubmit = () => {}, 
  onSubmit = () => {}, 
  register, 
}) => {

  const {  onOpen, isOpen, onClose } = useDisclosure()

  return (
    <header className={cls.header}>
      <Container >
        <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
          <FormControl as='form'>
            <Box className={cls.inputWrapper}>
                <Input
                    type="text"
                    placeholder="Имя"
                    register={register}
                    name="first_name"  
                />
            </Box>
            <Box className={cls.inputWrapper}>
                <Input
                    type="text"
                    placeholder="Фамилия"
                    register={register}
                    name="last_name"
                />
            </Box>
            <Box className={cls.inputWrapper}>
                <Input
                    type="number"
                    placeholder="Номер телефона"
                    register={register}
                    name="phone_number" 
                />
            </Box>
            <Box className={cls.inputWrapper}>
                <Input
                    type="email"
                    placeholder="Email"
                    register={register}
                    name="email"  
                />
            </Box>
            <Box className={cls.inputWrapper}>
                <Input
                    type="password"
                    placeholder="Пароль"
                    register={register}
                    name="password"
                />
            </Box>
            <Box className={cls.inputWrapper}>
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
        <Box className={cls.wrapper}> 
          <h1 className={cls.title}>Пользователи</h1>
          <Box className={cls.btnsWrapper}>
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
