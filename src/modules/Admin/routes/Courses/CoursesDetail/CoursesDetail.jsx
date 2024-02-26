// import cls from './styles.module.scss';
// import { Button, FormControl, Input } from '@chakra-ui/react';
// import { useCoursesDetailProps } from './useCoursesDetailProps';

// export const CoursesDetail = () => {
//   const { 
//     // id,
//     navigate,
//     detail,
//     handleSubmit,
//     register,
//     onSubmit,
//   } = useCoursesDetailProps();

//   return (
//     <div>
//       <h1>Course id: </h1>
//       <Button onClick={() => navigate(-1)}>Back</Button>
//       <span>Created at:{detail?.created_at} </span>
//       <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
//         <Input placeholder="Title" {...register("title")} />
//         <Button type="submit">Save</Button>
//       </FormControl>
//     </div>
//   );
// };

import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Footer } from "components/Footer";
import { useCoursesDetailProps } from "./useCoursesDetailProps";
import { Header } from "./Components/Header";


export const CoursesDetail = () => {

  const { 
        navigate,
        detail,
        handleSubmit,
        register,
        onSubmit,
      } = useCoursesDetailProps();

  return(
    <Box>
      <Header />
      <Container>
        <Box marginTop="78px">
          <Tabs>
            <TabList >
              <Tab>Детали</Tab>
              <Tab>Уроки</Tab>
              <Tab>Отчеты</Tab>
              <Tab>Ученики</Tab>
            </TabList>
            <TabPanel>
              {/* <ListUsers /> */}
            </TabPanel>
            <TabPanel>
              {/* <ListMentors /> */}
            </TabPanel>
            <TabPanel>
              {/* <ListMentors /> */}
            </TabPanel>
            <TabPanel>
              {/* <ListMentors /> */}
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
      <Footer />
    </Box>
  ) 
}
