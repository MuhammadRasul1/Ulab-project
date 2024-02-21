import { Button, useDisclosure } from '@chakra-ui/react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Edit from "assets/img/icon/edit.svg";
import { useForm } from 'react-hook-form';
import { useGetUsers } from 'api';

export const useListUsersProps = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { data: users } = useGetUsers();

  const { mutateAsync } = useMutation({mutationFn: (id) => request.delete(`user/${id}`)})
  
  const handleDeleteUser = (id) => {
    mutateAsync(id);
  };

  const { 
    register,
    handleSubmit,
  } = useForm();

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
      title: 'Фамилия',
      dataIndex: 'last_name',
      key: 'last_name',
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
             <Button  
              padding="4px" 
              colorScheme="transparent" 
              onClick={() => onOpen(`/user/${item?.id}`)}>
              <img src={Edit} width={20} height={20} alt="edit" />
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
            */}
            <Button colorScheme="red" onClick={() => handleDeleteUser(item?.id)}>
              Delete
            </Button> 
          </div>
        );
      },
    },
  ];

  authStore.hasNewData(users?.users)
  const data = authStore.newData

  return {
    isOpen,
    onOpen,
    onClose,
    columns,
    data,
    register,
    handleSubmit,
  };
};
