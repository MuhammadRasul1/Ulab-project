import { CustomTable } from 'components/CustomTable';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';
import { useCoursesMainProps } from './useCoursesMainProps';
import { Container } from 'components/Container';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const CoursesMain = () => {
  const {columns, data} = useCoursesMainProps();

  return (
    <Container >
      <Header
        title="Курсы"
      />
      <Box marginBottom="100px" marginTop="84px">
          <CustomTable columns={columns} data={data} />
      </Box>
      <Footer />
    </Container>
  )
};
