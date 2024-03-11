import { useNavigate } from 'react-router-dom';
import Edit from "assets/img/icon/edit.svg";
import { Button, useDisclosure } from "@chakra-ui/react";
import { useCreateCourse, useGetCourses } from "services/courses.service";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const useCoursesProps = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()

  const {
    register,
    handleSubmit,
  } = useForm()

  const { refetch, data: courses } = useGetCourses()
  console.log(courses?.courses)

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const nPages = Math.ceil(courses?.count / recordsPerPage) || 1;
  const currentRecords = courses?.courses?.slice(indexOfFirstRecord, indexOfLastRecord);

  const { mutate: createCourse, reset } = useCreateCourse()
    
  const onSubmit = (data) => {
    const datas = {
      photo: data?.photo,
      name: data?.name,
      for_who: data?.for_who,
      type: data?.type,
      weekly_number: data?.weekly_number - 0,
      duration: data?.duration,
      price: data?.price - 0,
      beginning_date_course: data?.beginning_date_course,
    }
    createCourse({
      ...datas
    }, {
      onSuccess: () => {
        onClose()
        reset()
        refetch();
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
    onOpen,
    onClose,
    register,
    handleSubmit,
    onSubmit,
    columns,
    data,
  };
};
