import { Box, FormControl } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";
import { BtnDownload } from "components/BtnDownload";
import { AddModal } from "components/AddModal";
import { CoursesInput } from "../CoursesInput";
import { useHeaderProps } from "./useHeaderProps"

export const Header = () => {

  const { handleSubmit, onSubmit, register, isOpen, onClose, onOpen, handleDownload } = useHeaderProps();

  return (
    <header className={cls.header}>
      <Container >
        <AddModal size={"lg"} handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={onClose} >
          <FormControl as='form'>
            <CoursesInput 
                label="Загрузить фото"
                id="download_photo"
                type="file"
                // register={register}
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
          </FormControl>
        </AddModal>
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
          <h1 className={cls.title}>Курсы</h1>
          <Box display="flex" alignItems="start">
            <BtnDownload 
              download={handleDownload}
            /> 
            <SearchInput className={cls.searchInput}/>
            <Filter />
            <BtnAdd className={cls.btnAdd} onClick={onOpen}/>
          </Box>
        </Box>
      </Container>
    </header>
  ) 

};
