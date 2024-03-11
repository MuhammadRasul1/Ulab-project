import { Box } from "@chakra-ui/react"
import { Container } from "components/Container"
import { Header } from "components/Header"
import { useGroupsProps } from "./useGroupsProps"
import { CustomTable } from "components/CustomTable"

export const Groups = () => {

    const {
        courses,
        columns,
        data
    } = useGroupsProps()

    return (
        <Box mt={100}>
            <Container>
                <Header 
                    title="Группы"
                />
                <ul>
                    {
                        courses?.courses?.map((course, index) => (
                            <li>
                                <button type="button" className="content__form-title-wrapper js-content-btn">
                                    <strong className="title">{course?.name}</strong>
                                    <span className="arrow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 19 13" fill="none">
                                            <path class="content__arrow" d="M15.9486 0.585815L18.777 3.41424L9.68136 12.5099L0.585693 3.41424L3.41412 0.585815L9.68091 6.85303L15.9486 0.585815Z" fill="#0E8784"/>
                                        </svg>
                                    </span>
                                </button>
                                <CustomTable columns={columns} data={data} />
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </Box>
    )
}



// import { Box, FormControl } from "@chakra-ui/react";
// import cls from "./styles.module.scss";
// import { CustomTable } from "components/CustomTable";
// import { Input } from "components/Input";
// import { EditModal } from "components/EditModal";
// // import { useGroupsProps } from "./useGroupsProps";
// // import { Btns } from "../Btns";
// // import { StatusModal } from "modules/Admin/routes/Components/StatusModal";
// // import { Select } from "components/Select";

// export const Groups = () => {

//     // const {
//     //     groupsColumns,
//     //     groupsData,
//     //     activeCourse,
//     //     handleCreateGroup,
//     //     handleDeleteCourse,
//     //     handleEdit,
//     //     handleSubmit,
//     //     isOpen,
//     //     onClose,
//     //     onOpen,
//     //     register,
//     //     setActiveCourse,
//     // } = useGroupsProps();

//   return(
//     <Box marginTop="20px" mb={100}>
//         ads
//       {/* <Btns 
//         onOpen={onOpen}
//         isOpen={isOpen}
//         onClose={onClose}
//         activeCourse={activeCourse}
//         handleSubmit={handleSubmit}
//         handleCreateGroup={handleCreateGroup}      
//       /> */}
//       {/* <CustomTable columns={groupsColumns} data={groupsData} />
//       <EditModal handleDelete={handleDeleteCourse} handleAccept={handleSubmit(handleEdit)} id={activeCourse} isOpen={isOpen} register={register} onClose={() => {
//         onClose()
//         // setActiveUserId("")
//       }}>
//         <FormControl  as='form'>
//           <Box className={cls.wrapper}>
//             <Input
//               type="text"
//               placeholder="Имя"
//               register={register}
//               name="name"
//             />
//           </Box>
//           <Box className={cls.wrapper}>
//             <Input
//               type="datetime-local"
//               placeholder="Фамилия"
//               register={register}
//               name="end_date"
//             />
//           </Box>
//         </FormControl>
//       </EditModal> */}
//     </Box>
//   ) 
// }