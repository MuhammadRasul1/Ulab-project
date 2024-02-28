import { Button, useDisclosure } from '@chakra-ui/react';
import { authStore } from 'store/auth.store';
import EyeView from "assets/img/icon/EyeView.svg";
import Edit from "assets/img/icon/edit.svg";
import { useForm } from 'react-hook-form';
import { useDeleteUserById, useGetStudents, useGetUserById, useUpdateUser } from 'api';
import { useEffect, useState } from 'react';

export const useThreadProps = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [activeUserId, setActiveUserId] = useState("")

  const { data: students } = useGetStudents();

  const getUserById = useGetUserById({userId: activeUserId})
  
  const updateUser = useUpdateUser()
  
  const handleEdit = (data) => {
    updateUser.mutate({...data, id: activeUserId})
    onClose()
  }
  
  const deleteUser = useDeleteUserById()

  const handleDeleteUser = (data) => {
    deleteUser.mutate({...data, id: activeUserId})
    onClose()
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
      title: 'Название потока',
      dataIndex: 'name',
      key: 'name',
      width: 140,
    },
    {
      title: 'Учеников',
      dataIndex: 'students',
      key: 'students',
      width: 100,
    },
    {
      title: 'Изучили всё',
      dataIndex: 'study_all',
      key: 'study_all',
      width: 128,
    },
    {
      title: 'Не изучили всё',
      dataIndex: 'no_study_all',
      key: 'no_study_all',
      width: 128,
    },
    {
      title: 'Не приступали',
      dataIndex: 'no_study_all',
      key: 'no_study_all',
      width: 132,
    },
    {
      title: 'Начало',
      dataIndex: 'data',
      key: 'data',
      width: 116,
    },
    {
      title: 'Завершение',
      dataIndex: 'no_study_all',
      key: 'no_study_all',
      width: 132,
    },
    {
      title: 'Статус',
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
             <Button  
              padding="4px" 
              colorScheme="transparent" 
              onClick={() => {
                onOpen()
                setActiveUserId(item?.id)
              }}>
              <img src={EyeView} width={20} height={20} alt="edit" />
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
    handleDeleteUser,
    handleEdit,
    activeUserId,
    setActiveUserId,
  };
};
