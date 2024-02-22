import { Box, FormControl, Input } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListUsersProps } from "./useListUsersProps";
import { CustomTable } from "components/CustomTable";
import { EditModal } from "../../Components/EditModal";
import { InputModal } from "components/InputModal";

export const ListUsers = () => {

  const {
    columns, 
    data, 
    isOpen,
    onClose,
    register,
    activeUserId,
   handleSubmit,
    setActiveUserId,
    onSubmit
   } = useListUsersProps();


  return(
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
      <EditModal handleAccept={handleSubmit(onSubmit)} id={activeUserId} isOpen={isOpen} register={register} onClose={() => {
        onClose()
        setActiveUserId("")
      }}>
        <FormControl  as='form'>
          <Box className={cls.wrapper}>
            <InputModal
              type="text"
              placeholder="Имя"
              register={register}
              name="first_name"
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
              type="text"
              placeholder="Фамилия"
              register={register}
              name="last_name"
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
              type="number"
              placeholder="Номер телефона"
              name="phone_number"
              register={register}
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
              type="email"
              placeholder="Email"
              register={register}
              name="email"
            />
          </Box>
        </FormControl>
      </EditModal>
    </Box>
  ) 
}



{/* <AddModal openModal={openModal} callback={handleSubmit(onSubmit)} onClose={handleClose}>
  <FormControl as='form'>
    <Input placeholder='user change' type="text" {...register('name')} />
  </FormControl>
</AddModal> */}