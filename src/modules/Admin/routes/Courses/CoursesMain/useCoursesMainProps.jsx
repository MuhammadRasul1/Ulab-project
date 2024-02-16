import { Button } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useGetCourses, useDeleteCourses } from 'services/api/courses/courses.service';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';

export const useCoursesMainProps = () => {
  const navigate = useNavigate();

  const createUsers = useQuery({queryKey: ['course'], queryFn: () => request.get('course').then(res => res.data)})

  const {mutateAsync} = useMutation({mutationFn: (id) => request.delete(`course/${id}`)})
  const handleDeleteUser = (id) => {
    mutateAsync(id)
  };

  const columns = [
    {
      title: '№',
      dataIndex: 'number',
      key: 'number',
      width: 48,
    },
    {
      title: 'Название курса',
      dataIndex: 'name_course',
      key: 'name_course',
      width: 220,
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
      width: 210,
    },
    {
      title: 'Тип',
      dataIndex: 'type',
      key: 'type',
      width: 88,
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: 100,
    },
    {
      title: 'Время',
      dataIndex: 'time',
      key: 'time',
      width: 100,
    },
    {
      title: 'Кол-во документов',
      dataIndex: 'number_of_document',
      key: 'number_of_document',
      width: 170,
    },
    {
      title: 'Дата',
      dataIndex: 'data',
      key: 'data',
      width: 104,
    },
    {
      title: 'Оценка',
      dataIndex: 'sccore',
      key: 'sccore',
      width: 94,
    },
    {
      title: 'Operations',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button
              // colorScheme={item?.has_permission ? 'linkedin' : 'green'}
              onClick={() => handleGivePermission(item?.id)}
              isDisabled={item?.has_permission}
            >
              {item?.has_permission ? 'access is allowed' : 'give access'}
            </Button>
            <Button colorScheme="teal" onClick={() => navigate(`/users/${item?.id}`)}>
              Edit
            </Button>
            <Button colorScheme="red" onClick={() => handleDeleteUser(item?.id)}>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  authStore.hasNewData(createUsers?.data?.data?.users)
  const data = authStore.newData

  return {
    columns,
    data,
  };
};
