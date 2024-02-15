import { Button } from '@chakra-ui/react';
import { format } from 'date-fns';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
// import { useGetCourses, useDeleteCourses } from 'services/api/courses/courses.service';
import request from 'services/httpRequest';

export const useCoursesMainProps = () => {
  const navigate = useNavigate();

  const createUsers = useQuery({queryKey: ['course'], queryFn: () => request.get('course').then(res => res.data)})

  const {mutateAsync} = useMutation({mutationFn: (id) => request.delete(`course/${id}`)})
  const handleDeleteUser = (id) => {
    mutateAsync(id)
  };

  const columns = [
    {
      title: 'Login',
      dataIndex: 'login_name',
      key: 'name',
      width: 100,
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
      width: 100,
    },
    {
      title: 'Created at',
      dataIndex: 'created_at',
      key: 'created_at',
      width: 200,
      render: (item) => <span>{item ? format(new Date(item), 'dd.MM.yyyy HH:mm') : ''}</span>,
    },
    {
      title: 'Has permission',
      dataIndex: 'has_permission',
      key: 'has_permission',
      render: (item) => (item ? 'Yes' : 'No'),
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
