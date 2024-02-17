import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListUsersProps } from "./useListUsersProps";
import { CustomTable } from "components/CustomTable";

export const ListUsers = () => {

  const {columns, data } = useListUsersProps();

  return(
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
    </Box>
  ) 
}