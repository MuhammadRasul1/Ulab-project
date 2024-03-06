import { Button, useDisclosure } from '@chakra-ui/react';
import Edit from 'assets/img/icon/edit.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDeleteUserById, useGetUserById, useUpdateUserById, useGetStudents, useGetMentors, useCreateUser } from 'services/users.service';

export const useMentorsProps = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeUserId, setActiveUserId] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm();
  
  const { data: mentors, refetch } = useGetMentors({
    offset: 1,
  });

  const { data: getUserById, isSuccess} = useGetUserById({ userId: activeUserId });

  const { mutate: createUser } = useCreateUser()
    
  const onSubmit = (data) => {
    createUser({
      ...data,
      user_type: 'Mentor'
    }, {
      onSuccess: () => {
        refetch();
        onClose()
      }
    })
  }

  const { mutate: updateUser } = useUpdateUserById();

  const handleEdit = (data) => {
    updateUser({
      ...data,
      id: activeUserId,
    }, {
        onSuccess: () => {
          refetch();
          onClose();
        }
    });
  };

  const { mutate: deleteUser } = useDeleteUserById();

  const handleDeleteUser = (data) => {
    deleteUser({ 
        ...data, 
        id: activeUserId 
    }, {
        onSuccess: () => {
          refetch();
          onClose();
        },
        // onError: (error) => {
        //   alert(error?.response?.data)
        // }
    });
  };

  useEffect(() => {
    if (isSuccess && activeUserId) {
      const userData = getUserById.data;

      reset({
        first_name: userData?.first_name,
        last_name: userData?.last_name,
        phone_number: userData?.phone_number,
        email: userData?.email,
      });
    }
  }, [getUserById]);

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
                onOpen();
                setActiveUserId(item?.id);
              }}
            >
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
          </div>
        );
      },
    },
  ];

  const mentorsData = mentors?.users;

  return {
    isOpen,
    onOpen,
    onClose,
    columns,
    mentorsData,
    register,
    handleSubmit,
    onSubmit,
    handleDeleteUser,
    handleEdit,
    activeUserId,
    setActiveUserId,
  };
};
