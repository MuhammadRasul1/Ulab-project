import { Box, Button, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CoursesInput } from "../../../Components/CoursesInput";
import { useDetailProps } from "./useDetailsProps";

export const Details = ({ detail }) => {

    const { handleSubmit, handleEdit, register, handleDeleteCourse } = useDetailProps(detail);
    
    return (
        <FormControl maxWidth="550px" mt="4px" as="form">
            <Box border="1px solid #EBEDEE" borderRadius="8px" padding={"18px"} pb={0}>
                <h1 className={cls.title}>Детали</h1>
                <Box mt="24px" >
                    <CoursesInput
                        className={cls.input} 
                        label="Загрузить фото"
                        id="download_photo"
                        type="file"
                        register={register}
                        name="photo"
                        required
                    /> 
                </Box>
                <CoursesInput
                    className={cls.input} 
                    label="Название курса"
                    id="name_course"
                    placeholder="Введите Название курса"
                    type="text"
                    register={register}
                    name="name"
                    required
                />
                <CoursesInput
                    className={cls.input}
                    label="Описание" 
                    id="desc_course"
                    placeholder="Введите описание"
                    type="text"
                    register={register}
                    name="for_who"
                    required
                />
                <CoursesInput
                    className={cls.input}
                    label="Тип" 
                    id="type"
                    placeholder="Введите тип"
                    type="text"
                    register={register}
                    name="type"
                    required
                />
                <CoursesInput
                    className={cls.input}
                    label="Повторяемость:" 
                    id="weekly_number"
                    placeholder="Введите повторяемость"
                    type="number"
                    register={register}
                    name="weekly_number"
                    required
                />
                <CoursesInput
                    className={cls.input}
                    label="Длительность урока:" 
                    id="duration"
                    placeholder="Введите длительность урока"
                    type="text"
                    register={register}
                    name="duration"
                    required
                />
                <CoursesInput
                    className={cls.input}
                    label="Сумма" 
                    id="price"
                    placeholder="Введите сумму"
                    type="number"
                    register={register}
                    name="price"
                    required
                />
                <CoursesInput
                    label="Дата начало" 
                    id="date"
                    placeholder="Введите сумму"
                    type="datetime-local"
                    register={register}
                    name="beginning_date_course"
                    required
                />
            </Box>
            <Box display="flex" justifyContent="space-between" mt="24px">
                <Box>
                    <Button mr={3} onClick={handleDeleteCourse} colorScheme='red' size='md'>
                        Удалить
                    </Button>
                    <Button onClick={handleDeleteCourse} colorScheme='red' variant='outline' size='md'>
                        Заблокировать
                    </Button>
                </Box>
                {/* <Box display="flex" alignItems="center"> */}
                    {/* <Button border="1px solid #E5E9EB" backgroundColor="transparent" mr={3}>
                        Отменить
                    </Button> */}
                    <Button onClick={handleSubmit(handleEdit)}  backgroundColor="teal" color="white">
                        Изменить
                    </Button>
                {/* </Box> */}
            </Box>
        </FormControl>
    )
}