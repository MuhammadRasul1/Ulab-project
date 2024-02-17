import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListMentorsProps } from "./useListMentorsProps";
import { Container } from "components/Container";
// import { UsersTab } from "modules/Admin/routes/Components/UsersTab";
import { CustomTable } from "components/CustomTable";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const ListMentors = () => {

  const {columns, data } = useListMentorsProps();

  return (
    <Box marginTop="20px">
      <CustomTable columns={columns} data={data} />
    </Box>
  ) 
}