// import { Box } from "@chakra-ui/react";
// import { Container } from "components/Container";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import { ListUsers } from "./Components/ListUsers";
// import { ListMentors } from "./Components/ListMentors";
// import { Header } from "./Components/Header";
// import { Pagination } from "components/Pagination";
// import { useUsersProps } from "./useUsersProps";

// export const Users = () => {

//   const { 
//     isOpen, 
//     onOpen, 
//     onClose, 
//     columns, 
//     usersData,
//     mentorsData,
//     handleSubmit,
//     onSubmit,
//     handleEdit, 
//     handleDeleteUser,
//     activeUserId,
//     register,
//     setActiveUserId
//   } = useUsersProps()

//   return(
//     <Box>
//       <Header 
//         onOpen={onOpen}
//         isOpen={isOpen}
//         onClose={onClose}
//         handleSubmit={handleSubmit}
//         onSubmit={onSubmit}
//         register={register}
//       />
//       <Container>
//         <Box marginTop="78px" mb={"100px"}>
//           <Tabs>
//             <TabList >
//               <Tab>Ученики</Tab>
//               <Tab>Менторы</Tab>
//             </TabList>
//             <TabPanel>
//               <ListUsers 
//                 isOpen={isOpen}
//                 onOpen={onOpen}
//                 onClose={onClose} 
//                 columns={columns} 
//                 data={usersData}
//                 handleSubmit={handleSubmit}
//                 handleEdit={handleEdit} 
//                 handleDeleteUser={handleDeleteUser}
//                 activeUserId={activeUserId}
//                 register={register}
//                 setActiveUserId={setActiveUserId}
//               />
//             </TabPanel>
//             <TabPanel>
//               <ListMentors 
//                 isOpen={isOpen}
//                 onOpen={onOpen} 
//                 onClose={onClose} 
//                 columns={columns} 
//                 data={mentorsData}
//                 handleSubmit={handleSubmit}
//                 handleEdit={handleEdit} 
//                 handleDeleteUser={handleDeleteUser}
//                 activeUserId={activeUserId}
//                 register={register}
//                 setActiveUserId={setActiveUserId}
//               />
//             </TabPanel>
//           </Tabs>
//         </Box>
//       </Container>
//       <Pagination 
        
//       />
//     </Box>
//   ) 
// }

import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CustomTable } from "components/CustomTable";
import { EditModal } from "components/EditModal";
import { Input } from "components/Input";
import { useUsersProps } from "./useUsersProps";
import { Header } from "./Components/Header";
import { Container } from "components/Container";
import { Pagination } from "components/Pagination";
import { AddModal } from "components/AddModal";
import { Select } from "components/Select";


export const Users = () => {

    const { 
    isOpen, 
    onOpen, 
    onClose, 
    columns, 
    usersData,
    handleSubmit,
    // onSubmit,
    handleEdit, 
    handleDeleteUser,
    activeUserId,
    register,
    setActiveUserId
  } = useUsersProps()


  return(
    <Box margin="78px 0">
      <Container>
        <Header 
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          handleSubmit={handleSubmit}
          // onSubmit={onSubmit}
          register={register}
        />
      <CustomTable columns={columns} data={usersData} />
      {/* <AddModal handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
        <FormControl as='form'>
          <Box className={cls.inputWrapper}>
              <Input
                  type="text"
                  placeholder="Имя"
                  register={register}
                  name="first_name"  
              />
          </Box>
          <Box className={cls.inputWrapper}>
              <Input
                  type="text"
                  placeholder="Фамилия"
                  register={register}
                  name="last_name"
              />
          </Box>
          <Box className={cls.inputWrapper}>
              <Input
                  type="number"
                  placeholder="Номер телефона"
                  register={register}
                  name="phone_number" 
              />
          </Box>
          <Box className={cls.inputWrapper}>
              <Input
                  type="email"
                  placeholder="Email"
                  register={register}
                  name="email"  
              />
          </Box>
          <Box className={cls.inputWrapper}>
              <Input
                  type="password"
                  placeholder="Пароль"
                  register={register}
                  name="password"
              />
          </Box>
          <Box className={cls.inputWrapper}>
              <Select 
                register={register}
                name="user_type"
                id={"user_type"}
                text1="Студент"
                text2="Ментор"
                value1="Student"
                value2="Mentor"
              />
          </Box>
        </FormControl>
      </AddModal> */}
      <EditModal handleDelete={handleDeleteUser} handleAccept={handleSubmit(handleEdit)} id={activeUserId} isOpen={isOpen} register={register} onClose={() => {
        onClose()
        setActiveUserId("")
      }}>
        <FormControl  as='form'>
          <Box className={cls.wrapper}>
            <Input
              type="text"
              placeholder="Имя"
              register={register}
              name="first_name"
            />
          </Box>
          <Box className={cls.wrapper}>
            <Input
              type="text"
              placeholder="Фамилия"
              register={register}
              name="last_name"
            />
          </Box>
          <Box className={cls.wrapper}>
            <Input
              type="number"
              placeholder="Номер телефона"
              name="phone_number"
              register={register}
            />
          </Box>
          <Box className={cls.wrapper}>
            <Input
              type="email"
              placeholder="Email"
              register={register}
              name="email"
            />
          </Box>
        </FormControl>
      </EditModal>
      </Container>
      {/* <Pagination />  */}
    </Box>
  ) 
}