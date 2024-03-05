import { Box } from "@chakra-ui/react";
import { Container } from "components/Container";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ListUsers } from "./Components/ListUsers";
import { ListMentors } from "./Components/ListMentors";
import { Header } from "./Components/Header";
import { Pagination } from "components/Pagination";
import { useUsersProps } from "./useUsersProps";

export const Users = () => {

  const { 
    isOpen, 
    onOpen, 
    onClose, 
    columns, 
    usersData,
    mentorsData,
    handleSubmit,
    onSubmit,
    handleEdit, 
    handleDeleteUser,
    activeUserId,
    register,
    setActiveUserId
  } = useUsersProps()

  return(
    <Box>
      <Header 
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
      <Container>
        <Box marginTop="78px" mb={"100px"}>
          <Tabs>
            <TabList >
              <Tab>Ученики</Tab>
              <Tab>Менторы</Tab>
            </TabList>
            <TabPanel>
              <ListUsers 
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose} 
                columns={columns} 
                data={usersData}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit} 
                handleDeleteUser={handleDeleteUser}
                activeUserId={activeUserId}
                register={register}
                setActiveUserId={setActiveUserId}
              />
            </TabPanel>
            <TabPanel>
              <ListMentors 
                isOpen={isOpen}
                onOpen={onOpen} 
                onClose={onClose} 
                columns={columns} 
                data={mentorsData}
                handleSubmit={handleSubmit}
                handleEdit={handleEdit} 
                handleDeleteUser={handleDeleteUser}
                activeUserId={activeUserId}
                register={register}
                setActiveUserId={setActiveUserId}
              />
            </TabPanel>
          </Tabs>
        </Box>
      </Container>
      <Pagination />
    </Box>
  ) 
}
