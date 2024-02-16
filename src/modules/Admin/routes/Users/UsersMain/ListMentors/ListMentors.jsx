import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { useListMentorsProps } from "./useListMentorsProps";
import { Container } from "components/Container";
import { UsersTab } from "modules/Admin/routes/Components/UsersTab";
import { CustomTable } from "components/CustomTable";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const ListMentors = () => {

  const {columns, data } = useListMentorsProps();

  return (
    <Box>
      <Header
        title="Пользователи"
      />
      <Box marginBottom="218px" marginTop="68px">
        <UsersTab />
        <Container>
            <CustomTable columns={columns} data={data} />
        </Container>
      </Box>
      <Footer />
    </Box>
  ) 
}