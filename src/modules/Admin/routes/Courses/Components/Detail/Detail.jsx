import { Box, Button, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { CoursesInput } from "../CoursesInput";

export const Detail = ({
    handleDeleteCourse = () => {},
    handleUpdate = () => {},
    register = () => {},
}) => {
  
    return (
        <FormControl className={cls.form} as="form">
            <Box className={cls.wrapper}>
                <h1 className={cls.title}>Детали</h1>
                <Box className={cls.content}>
                    <CoursesInput
                        label="Загрузить фото"
                        id="download_photo"
                        type="file"
                        register={register}
                        name="photo"
                        required
                    /> 
                    <CoursesInput
                        label="Название курса"
                        id="name_course"
                        placeholder="Введите Название курса"
                        type="text"
                        register={register}
                        name="name"
                        required
                    />
                    <CoursesInput
                        label="Описание" 
                        id="desc_course"
                        placeholder="Введите описание"
                        type="text"
                        register={register}
                        name="for_who"
                        required
                    />
                    <CoursesInput
                        label="Тип" 
                        id="type"
                        placeholder="Введите тип"
                        type="text"
                        register={register}
                        name="type"
                        required
                    />
                    <CoursesInput
                        label="Повторяемость:" 
                        id="weekly_number"
                        placeholder="Введите повторяемость"
                        type="number"
                        register={register}
                        name="weekly_number"
                        required
                    />
                    <CoursesInput
                        label="Длительность урока:" 
                        id="duration"
                        placeholder="Введите длительность урока"
                        type="text"
                        register={register}
                        name="duration"
                        required
                    />
                    <CoursesInput
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
            </Box>
            <Box className={cls.wrapperBottom}>
                <Box>
                    <Button mr={3} onClick={handleDeleteCourse} colorScheme='red' size='md'>
                        Удалить
                    </Button>
                    <Button onClick={handleDeleteCourse} colorScheme='red' variant='outline' size='md'>
                        Заблокировать
                    </Button>
                </Box>
                <Button onClick={handleUpdate}  backgroundColor="teal" color="white">
                    Изменить
                </Button>
            </Box>
        </FormControl>
    )
}