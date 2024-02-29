import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { Input } from "components/Input";
import { EditModal } from "components/EditModal";
import { StatusModal } from "modules/Admin/routes/Components/StatusModal";
import { Select } from "components/Select";
import { useGroupsProps } from "./useGroupsProps";
import { Btns } from "../Btns";

export const Groups = () => {

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
  } = useGroupsProps();

  return(
    <Box marginTop="20px">
      <Btns />
      <CustomTable columns={columns} data={data} />
      <StatusModal>
        <FormControl as={"form"}>
          <Select 
            register={register}
            name="Status"
            id="Status"
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
              placeholder="Название потока"
              register={register}
              name="groups_name"
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