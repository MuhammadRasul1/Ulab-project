import { CustomTable } from 'components/CustomTable';
import cls from './styles.module.scss';
import { Box } from '@chakra-ui/react';
import { useCoursesMainProps } from './useCoursesMainProps';

export const CoursesMain = () => {
  const {columns, data} = useCoursesMainProps();

  return (
    <Box>
      <CustomTable columns={columns} data={data} />
    </Box>
  )
};
