import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useCoursesDetailProps } from "./useCoursesDetailProps";
import { Header } from "./Components/Header/Header";
import { Details } from "./Components/Details";
import { Thread } from "./Components/Thread";
import { Pagination } from "components/Pagination";


export const CoursesDetail = () => {

  const { 
    detail,
  } = useCoursesDetailProps();

  return(
    <Box>
      <Header title={detail?.name} />
      <Container>
        <Box marginTop="78px">
          <Tabs>
            <TabList >
              <Tab>Детали</Tab>
              <Tab>Уроки</Tab>
              <Tab>Отчеты</Tab>
              <Tab>Потоки</Tab>
            </TabList>
            <TabPanel>
              <Details detail={detail} />
            </TabPanel>
            <TabPanel>
              Уроки
            </TabPanel>
            <TabPanel>
              Отчеты
            </TabPanel>
            <TabPanel>
              <Thread detail={detail} />
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
      <Pagination />
    </Box>
  ) 
}
