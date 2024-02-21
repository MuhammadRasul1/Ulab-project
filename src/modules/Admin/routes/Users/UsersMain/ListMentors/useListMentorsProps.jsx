import { Box, Button } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
// import { useGetCourses, useDeleteCourses } from 'services/api/courses/courses.service';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Dots from "assets/img/icon/dots.svg";

export const useListMentorsProps = () => {
  const navigate = useNavigate();

  const createUsers = useQuery({queryKey: ['mentors'], queryFn: () => request.get('mentors').then(res => res.data)})

  const {mutateAsync} = useMutation({mutationFn: (id) => request.delete(`mentors/${id}`)})
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
          <Box>
             <Button  
                padding="4px" 
                colorScheme="transparent" 
                border="1px solid #E5E9EB"
                onClick={() => navigate(`/mentors/${item?.id}`)}>
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
          </Box>
        );
      },
    },
  ];

  authStore.hasNewData(createUsers?.data?.users)
  const data = authStore.newData

  return {
    columns,
    data,
  };
};
