import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ListUsers } from "./Components/ListUsers";
import { ListMentors } from "./Components/ListMentors";
import { Header } from "./Components/Header";
// import { Footer } from "./Components/Footer";
import { Paginatoin } from "components/Pagination";

export const Users = () => {

  return(
    <Box>
      <Header />
      <Container>
        <Box marginTop="78px">
          <Tabs>
            <TabList >
              <Tab>Ученики</Tab>
              <Tab>Менторы</Tab>
            </TabList>
            <TabPanel>
              <ListUsers />
            </TabPanel>
            <TabPanel>
              <ListMentors />
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
      <Paginatoin />
    </Box>
  ) 
}
