import { Button, useDisclosure } from '@chakra-ui/react';
import Edit from 'assets/img/icon/edit.svg';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDeleteUserById, useGetUserById, useUpdateUserById, useGetStudents, useGetMentors, useCreateUser } from 'services/users.service';

export const useUsersProps = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeUserId, setActiveUserId] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm();

  const { data: students, refetch: studentsRefetch } = useGetStudents({
    offset: 1,
  });
  
  const { data: mentors, refetch: mentorsRefetch } = useGetMentors({
    offset: 1,
  });

  const { data: getUserById, isSuccess} = useGetUserById({ userId: activeUserId });

  const { mutate: createUser } = useCreateUser()
    
  const onSubmit = (data) => {
    createUser({
      ...data
    }, {
      onSuccess: () => {
        studentsRefetch();
        mentorsRefetch();
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
          studentsRefetch();
          mentorsRefetch();
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
          studentsRefetch();
          mentorsRefetch();
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

  const usersData = students?.users;
  const mentorsData = mentors?.users;

  // const [currentPage, setCurrentPage] = useState(1)
  // const [postsPerPage, setPostsPerPage] = useState(8)

  // const lastPostIndex = currentPage * postsPerPage
  // const firstPostIndex = lastPostIndex - postsPerPage
  // const currentPosts = data ? data.slice(firstPostIndex, lastPostIndex) : []
  // const paginate = (evt, pageNumber) => {
  //   evt.preventDefault()
  //   setCurrentPage(pageNumber)
  // }

  return {
    isOpen,
    onOpen,
    onClose,
    columns,
    usersData,
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
