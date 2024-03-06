import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { Input } from "components/Input";
import { EditModal } from "components/EditModal";
// import { useGroupsProps } from "./useGroupsProps";
// import { Btns } from "../Btns";
// import { StatusModal } from "modules/Admin/routes/Components/StatusModal";
// import { Select } from "components/Select";

export const Groups = () => {

    // const {
    //     groupsColumns,
    //     groupsData,
    //     activeCourse,
    //     handleCreateGroup,
    //     handleDeleteCourse,
    //     handleEdit,
    //     handleSubmit,
    //     isOpen,
    //     onClose,
    //     onOpen,
    //     register,
    //     setActiveCourse,
    // } = useGroupsProps();

  return(
    <Box marginTop="20px" mb={100}>
        ads
      {/* <Btns 
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        activeCourse={activeCourse}
        handleSubmit={handleSubmit}
        handleCreateGroup={handleCreateGroup}      
      /> */}
      {/* <CustomTable columns={groupsColumns} data={groupsData} />
      <EditModal handleDelete={handleDeleteCourse} handleAccept={handleSubmit(handleEdit)} id={activeCourse} isOpen={isOpen} register={register} onClose={() => {
        onClose()
        // setActiveUserId("")
      }}>
        <FormControl  as='form'>
          <Box className={cls.wrapper}>
            <Input
              type="text"
              placeholder="Имя"
              register={register}
              name="name"
            />
          </Box>
          <Box className={cls.wrapper}>
            <Input
              type="datetime-local"
              placeholder="Фамилия"
              register={register}
              name="end_date"
            />
          </Box>
        </FormControl>
      </EditModal> */}
    </Box>
  ) 
}