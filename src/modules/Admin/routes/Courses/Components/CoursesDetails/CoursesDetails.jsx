import { Box } from "@chakra-ui/react";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useCoursesDetailsProps } from "./useCoursesDetailsProps";
import { Header } from "../DetailHeader";
import { Thread } from "../Thread";
import { Detail } from "../Detail";
import { Lessons } from "../Lessons";
// import WithBasicExample from "../Lessons/Lessons";

export const CoursesDetails = () => {

  const { 
    register,
    handleSubmit,
    activeCourse,
    handleDeleteCourse,
    handleEdit,
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
                activeCourse={activeCourse} 
                handleDeleteCourse={handleDeleteCourse}
                handleEdit={handleEdit}
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
