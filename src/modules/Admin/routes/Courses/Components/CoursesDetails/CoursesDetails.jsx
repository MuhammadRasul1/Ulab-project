import { Box } from "@chakra-ui/react";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useCoursesDetailsProps } from "./useCoursesDetailsProps";
import { Detail } from "../Detail";
import { Lessons } from "../Lessons";
import { Header } from "../Header";

export const CoursesDetails = () => {

  const { 
    isOpen,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    activeCourse,
    handleDeleteCourse,
    handleUpdateCourse,
  } = useCoursesDetailsProps();

  return(
    <Box>
      <Header title={activeCourse?.name} />
      <Container>
        <Box marginTop="78px">
          <Tabs>
            <TabList >
              <Tab>Детали</Tab>
              <Tab>Уроки</Tab>
            </TabList>
            <TabPanel>
              <Detail 
                handleDeleteCourse={handleDeleteCourse}
                handleUpdate={handleSubmit(handleUpdateCourse)}
                register={register}
                handleSubmit={handleSubmit}
              />
            </TabPanel>
            <TabPanel>
              <Lessons 
                activeCourse={activeCourse} 
              />
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
    </Box>
  ) 
}
