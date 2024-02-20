import { Box, FormControl, Input } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListUsersProps } from "./useListUsersProps";
import { CustomTable } from "components/CustomTable";
// import { AddModal } from "../../Components/AddModal";
import { EditModal } from "../../Components/EditModal";
// import { InputModal } from "components/InputModal";

export const ListUsers = () => {

  const {
    columns, 
    data, 
    isOpen,
    onClose,
    onOpen,
    // openModal,
    // handleClose,
    // onSubmit,
    handleSubmit,
    register  
   } = useListUsersProps();

  return(
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
      <EditModal isOpen={isOpen} register={register} onClose={onClose}/>
      {/* <AddModal openModal={openModal} callback={handleSubmit(onSubmit)} onClose={handleClose}>
        <FormControl as='form'>
          <Input placeholder='user change' type="text" {...register('name')} />
        </FormControl>
      </AddModal> */}
    </Box>
  ) 
}