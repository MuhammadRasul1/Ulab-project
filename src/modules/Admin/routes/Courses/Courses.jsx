import { CustomTable } from 'components/CustomTable';
import { Box, FormControl } from '@chakra-ui/react';
import { useCoursesProps } from './useCoursesProps';
import { Container } from 'components/Container';
import { Pagination } from 'components/Pagination';
import { AddModal } from 'components/AddModal';
import { Header } from 'components/Header';
import { CoursesInput } from './Components/CoursesInput';

export const Courses = () => {
  const {
    currentPage,
    nPages,
    setCurrentPage,
    isOpen,
    handleClose,
    handleOpen,
    columns, 
    data, 
    handleSubmit, 
    onSubmit, 
    register
  } = useCoursesProps();

  return (
    <Box>
      <Container >
        <Header
          title="Курсы" 
          onOpen={handleOpen}
          isOpen={isOpen}
          onClose={handleClose}
          handleAccept={handleSubmit(onsubmit)}
          register={register}
        />
        <Box margin="78px 0">
          <CustomTable columns={columns} data={data} />
        </Box>
        <Pagination 
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
      
      {/* Modals */}
      <AddModal size={"lg"} handleAccept={handleSubmit(onSubmit)} register={register} isOpen={isOpen} onClose={handleClose} >
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
    </Box>
  )
};
