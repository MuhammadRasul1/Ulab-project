import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { EditModal } from "components/EditModal";
import { Input } from "components/Input";
import { Header } from "./Components/Header";
import { Container } from "components/Container";
import { Pagination } from "components/Pagination";
import { AddModal } from "components/AddModal";
import { Select } from "components/Select";
import { useMentorsProps } from "./useMentorsProps";

export const Mentors = () => {

    const { 
    isOpen, 
    onOpen, 
    onClose, 
    columns, 
    mentorsData,
    handleSubmit,
    // onSubmit,
    handleEdit, 
    handleDeleteUser,
    activeUserId,
    register,
    setActiveUserId
  } = useMentorsProps()


  return(
    <Box margin="78px 0">
      <Container>
        <Header 
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleSubmit}
          // onSubmit={onSubmit}
          register={register}
        />
      <CustomTable columns={columns} data={mentorsData} />
      {/* <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
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
      </AddModal> */}
      <EditModal handleDelete={handleDeleteUser} handleAccept={handleSubmit(handleEdit)} id={activeUserId} isOpen={isOpen} register={register} onClose={() => {
        onClose()
        setActiveUserId("")
      }}>
        <FormControl  as='form'>
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
              name="phone_number"
              register={register}
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
        </FormControl>
      </EditModal>
      </Container>
      {/* <Pagination />  */}
    </Box>
  ) 
}