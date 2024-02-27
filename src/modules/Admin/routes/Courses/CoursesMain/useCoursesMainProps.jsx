import cls from "./styles.module.scss";
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import request from 'services/httpRequest';
import { authStore } from 'store/auth.store';
import Edit from "assets/img/icon/edit.svg";
import { Button } from "@chakra-ui/react";
import { useGetCourses } from "api";

export const useCoursesMainProps = () => {
  const navigate = useNavigate();

  const getCourses = useGetCourses()

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
              onClick={() => navigate(`/admin/courses/${item?.id}`)}>
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
          </div>
        );
      },
    },
  ];

  authStore.hasNewData(getCourses?.data?.courses)
  const data = authStore.newData

  return {
    columns,
    data,
  };
};
