import { CustomTable } from 'components/CustomTable';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';
import { useCoursesMainProps } from './useCoursesMainProps';
import { Container } from 'components/Container';

export const CoursesMain = () => {
  const {columns, data} = useCoursesMainProps();

  return (
    <Box marginBottom="100px" marginTop="22px">
      <Container>
        <CustomTable columns={columns} data={data} />
      </Container>
    </Box>
  )
};
