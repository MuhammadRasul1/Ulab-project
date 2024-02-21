import { CustomTable } from 'components/CustomTable';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';
import { useCoursesMainProps } from './useCoursesMainProps';
import { Container } from 'components/Container';
import { Footer } from 'components/Footer';
import { Header } from '../Components/Header';

export const CoursesMain = () => {
  const {columns, data} = useCoursesMainProps();

  return (
    <Container >
      <Header />
      <Box marginBottom="100px" marginTop="84px">
          <CustomTable columns={columns} data={data} />
      </Box>
      <Footer />
    </Container>
  )
};
