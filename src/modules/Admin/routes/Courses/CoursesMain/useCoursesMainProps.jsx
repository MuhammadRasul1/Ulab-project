import { Button } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Dots from "assets/img/icon/dots.svg";

export const useCoursesMainProps = () => {
  const navigate = useNavigate();

  const createUsers = useQuery({queryKey: ['course'], queryFn: () => request.get('/course').then(res => res.data)})

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
      dataIndex: 'name',
      key: 'name',
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
      dataIndex: 'weekly_number',
      key: 'weekly_number',
      width: 100,
    },
    {
      title: 'Кол-во документов',
      dataIndex: 'number_of_materials',
      key: 'number_of_materials',
      width: 170,
    },
    {
      title: 'Дата',
      dataIndex: 'beginning_date_course',
      key: 'beginning_date_course',
      width: 104,
    },
    {
      title: 'Дата окончание',
      dataIndex: 'end_date',
      key: 'end_date',
      width: 104,
    },
    {
      title: 'Оценка',
      dataIndex: 'grade',
      key: 'grade',
      width: 94,
    },
    {
      title: '',
      key: 'operations',
      render: (item) => {
        return (
          <div>
            {/* <Button onClick={() => navigate(`/course/${item?.id}`)}>
              <img src={Dots} width={20} height={20} alt="dots" />
            </Button> */}
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

  authStore.hasNewData(createUsers?.data?.data?.courses)
  const data = authStore.newData

  return {
    columns,
    data,
  };
};
