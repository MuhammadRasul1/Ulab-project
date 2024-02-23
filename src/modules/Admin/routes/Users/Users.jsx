import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Footer } from "components/Footer";
import { useUsersProps } from "./useUsersProps";
import { ListUsers } from "./Components/ListUsers";
import { ListMentors } from "./Components/ListMentors";
import { InputModal } from "components/InputModal";
// import { AddModal } from "./Components/AddModal";
import { Header } from "./Components/Header";

export const Users = () => {
  const { handleSubmit, isOpen, onClose, register } = useUsersProps();

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
      <Footer />
      
      {/* <AddModal isOpen={isOpen} register={register} onClose={onClose}>
        <FormControl as='form'>
          <Box className={cls.wrapper}>
            <InputModal
                type="text"
                name="first_name"
                placeholder="Имя"
                {...register("first_name")}  
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
                type="text"
                name="last_name"
                placeholder="Фамилия"
                {...register("last_name")}  
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
                type="number"
                name="phone_number"
                placeholder="Номер телефона"
                {...register("phone_number")}  
            />
          </Box>
          <Box className={cls.wrapper}>
            <InputModal
                type="email"
                name="email"
                placeholder="Email"
                {...register("email")}  
            />
          </Box>
        </FormControl>
      </AddModal> */}
    </Box>
  ) 
}
