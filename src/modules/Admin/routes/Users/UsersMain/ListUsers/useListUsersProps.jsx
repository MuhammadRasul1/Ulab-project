import { Button } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Dots from "assets/img/icon/dots.svg";
// import { useGetCourses, useDeleteCourses } from 'services/api/courses/courses.service';

export const useListUsersProps = () => {
  const navigate = useNavigate();

  const createUsers = useQuery({queryKey: ['users'], queryFn: () => request.get('/user').then(res => res.data)})

  const {mutateAsync} = useMutation({mutationFn: (id) => request.delete(`user/${id}`)})
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
      title: 'Номер телефона',
      dataIndex: 'phone_number',
      key: 'phone_number',
      width: 180,
    },
    {
      title: 'Имя',
      dataIndex: 'first_name',
      key: 'first_name',
      width: 180,
    },
    {
      title: 'Mail',
      dataIndex: 'email',
      key: 'email',
      width: 664,
    },
    {
      title: '',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            <Button onClick={() => navigate(`/course/${item?.id}`)}>
              <img src={Dots} width={20} height={20} alt="dots" />
            </Button>
            {/* <Button
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
            </Button> */}
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
