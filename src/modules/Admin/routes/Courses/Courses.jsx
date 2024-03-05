import { CustomTable } from 'components/CustomTable';
import { Box } from '@chakra-ui/react';
import { useCoursesProps } from './useCoursesProps';
import { Container } from 'components/Container';
import { Header } from './Components/Header';
import { Pagination } from 'components/Pagination';

export const Courses = () => {
  const {
    isOpen,
    onClose,
    onOpen,
    columns, 
    data, 
    handleSubmit, 
    onSubmit, 
    register
  } = useCoursesProps();

  return (
    <Container >
      <Header
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen} 
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
      <Box marginBottom="100px" marginTop="84px">
        <CustomTable columns={columns} data={data} />
      </Box>
      <Pagination />
    </Container>
  )
};
