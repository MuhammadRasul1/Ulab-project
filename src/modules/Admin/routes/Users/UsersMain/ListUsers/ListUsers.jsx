import { Box, FormControl, Input } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListUsersProps } from "./useListUsersProps";
import { CustomTable } from "components/CustomTable";
// import { AddModal } from "../../Components/AddModal";
import { EditModal } from "../../Components/EditModal";
import { InputModal } from "components/InputModal";
// import { InputModal } from "components/InputModal";

export const ListUsers = () => {

  const {
    columns, 
    data, 
    isOpen,
    onClose,
    register  
   } = useListUsersProps();

  return(
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
      <EditModal isOpen={isOpen} register={register} onClose={onClose}>
        <Box className={cls.wrapper}>
          <InputModal
              type="text"
              name="first_name"
              placeholder="Имя"
              {...register("first_name")}  
          />
        </Box>
        <Box className={cls.wrapper}>
          <InputModal
              type="text"
              name="last_name"
              placeholder="Фамилия"
              {...register("last_name")}  
          />
        </Box>
        <Box className={cls.wrapper}>
          <InputModal
              type="number"
              name="phone_number"
              placeholder="Номер телефона"
              {...register("phone_number")}  
          />
        </Box>
        <Box className={cls.wrapper}>
          <InputModal
              type="email"
              name="email"
              placeholder="Email"
              {...register("email")}  
          />
        </Box>
      </EditModal>
    </Box>
  ) 
}



{/* <AddModal openModal={openModal} callback={handleSubmit(onSubmit)} onClose={handleClose}>
  <FormControl as='form'>
    <Input placeholder='user change' type="text" {...register('name')} />
  </FormControl>
</AddModal> */}