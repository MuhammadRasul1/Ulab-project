import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Link } from "react-router-dom";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ListUsers } from "../../Users/UsersMain/ListUsers";
import { ListMentors } from "../../Users/UsersMain/ListMentors";
import { Header } from "components/Header";
import { Footer } from "components/Footer";

export const UsersTab = () => {

  return(
    <Box>
      <Header
        title="Пользователи"
      />
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
      <Footer />
    </Box>
  ) 
}

    // <Box>
    //   <Header
    //     title="Пользователи"
    //   />
    //   <Box marginBottom="218px" marginTop="68px">
    //     {/* <UsersTab /> */}
    //     <Container>
    //         <CustomTable columns={columns} data={data} />
    //     </Container>
    //   </Box>
    //   <Footer />
    // </Box>

  {/* <ul className={cls.list}>
    <li className={cls.item}>
      <Link className={cls.link} to="/admin/users">Ученики</Link>
    </li>
    <li className={cls.item}>
      <Link className={cls.link} to="/admin/mentors">Менторы</Link>
    </li>
    <li className={cls.item}>
      <Link className={cls.link} to="/admin/tabs">tabs</Link>
    </li>
  </ul> */}