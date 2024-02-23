import { Button, useDisclosure } from '@chakra-ui/react';
import { useMutation } from '@tanstack/react-query';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Edit from "assets/img/icon/edit.svg";
import { useForm } from 'react-hook-form';
import { useGetStudents, useGetUserById, useUpdateUser } from 'api';
import { useEffect, useState } from 'react';

export const useListUsersProps = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [activeUserId, setActiveUserId] = useState("")

  const { data: students } = useGetStudents();

  const getUserById = useGetUserById({userId: activeUserId})
  
  // const updateUser = useUpdateUser()

  // console.log(updateUser.mutate({...data, id: activeUserId}))

  // const onSubmit = (data) => {
  //   updateUser.mutate({data, id: activeUserId})
  // }

  const {  mutate } = useMutation({ mutationFn: (data) => request.put(`user/${data.id}`, data)})

  const onSubmit = (data) => {
    mutate({...data, id: activeUserId})
  }


  useEffect(() => {
    console.log(getUserById.data)
    if(getUserById.isSuccess && activeUserId) {
        const userData = getUserById.data

        reset({
          first_name: userData?.first_name,
          last_name: userData?.last_name,
          phone_number: userData?.phone_number,
          email: userData?.email,
        })
    }
  }, [getUserById.data])

  const { 
    register,
    handleSubmit,
    reset,
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
              onClick={() => {
                onOpen()
                setActiveUserId(item?.id)
              }}>
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
          </div>
        );
      },
    },
  ];

  authStore.hasNewData(students?.users)
  const data = authStore.newData

  return {
    isOpen,
    onOpen,
    onClose,
    columns,
    data,
    register,
    handleSubmit,
    onSubmit,
    activeUserId,
    setActiveUserId,
  };
};
