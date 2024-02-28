import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { Input } from "components/Input";
import { useThreadProps } from "./useThreadProps";
import { EditModal } from "components/EditModal";
import { StatusModal } from "modules/Admin/routes/Components/StatusModal";
import { Select } from "components/Select";

export const Thread = () => {

  const {
    columns, 
    data, 
    isOpen,
    onClose,
    register,
    activeUserId,
    handleSubmit,
    setActiveUserId,
    handleEdit,
    handleDeleteUser,
   } = useThreadProps();

  return(
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
      <StatusModal>
        <FormControl as={"form"}>
          <Select 
              register={register}
              name="Status"
              id={"Status"}
              text1="Активный"
              text2="Пассивный"
              value1="Active"
              value2="Passive"
            />
        </FormControl>
      </StatusModal>
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
    </Box>
  ) 
}