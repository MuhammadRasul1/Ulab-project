import { useNavigate } from 'react-router-dom';
import Edit from "assets/img/icon/edit.svg";
import { Button, useToast } from "@chakra-ui/react";
import { useCreateCourse, useGetCourses } from "services/courses.service";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const useCoursesProps = () => {

  const [isOpen, setOpen] = useState(false);

  const toast = useToast()

  const {
    register,
    handleSubmit,
    reset,
  } = useForm()

  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    reset();
  };

  const { data: courses, refetch } = useGetCourses()

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(courses?.count / recordsPerPage) || 1;
  const currentRecords = courses?.courses?.slice(indexOfFirstRecord, indexOfLastRecord);

  const { mutate: createCourse } = useCreateCourse()
    
  const onSubmit = (res) => {
    const data = {
      photo: res?.photo,
      name: res?.name,
      for_who: res?.for_who,
      type: res?.type,
      weekly_number: res?.weekly_number - 0,
      duration: res?.duration,
      price: res?.price - 0,
      beginning_date_course: res?.beginning_date_course,
    }
    createCourse({
      ...data
    }, {
      onSuccess: () => {
        handleClose()
        reset()
        refetch();
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: "Вы успешно добавили курс",
          status: 'success',
        })
      },
      onError: (error) => {
        toast({
          position: 'top center',
          duration: 3000,
          isClosable: true,
          title: error?.response?.data,
          status: 'error',
        })
      }
    })
  }

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
      dataIndex: 'for_who',
      key: 'for_who',
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
      width: 124,
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
            <Button  
              padding="4px" 
              colorScheme="transparent" 
              onClick={() => 
                navigate(`/admin/courses/${item?.id}`)}
              >
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
          </div>
        );
      },
    },
  ];

  const data = currentRecords

  return {
    setCurrentPage,
    currentPage,
    nPages,
    isOpen,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    onSubmit,
    columns,
    data,
  };
};
