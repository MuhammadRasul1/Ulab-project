import { Button, useDisclosure } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDeleteCourseById, useGetCourses, useGetCourseById, useCreateCourse, useUpdateCourseById } from 'services/courses.service';
import { useNavigate, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import EyeView from "assets/img/icon/EyeView.svg";
import Edit from "assets/img/icon/edit.svg";
import { useCreateGroup, useGetGroups , useGetGroupById, useUpdateGroupById, useDeleteGroupById} from 'services/groups.service';

export const useCoursesDetailsProps = () => {

  const param = useParams()
  const navigate = useNavigate();
      
  useEffect(() => {
    //  getCourseById(param.id)
    request.get(`course/${param.id}`)
    .then(res => setActiveCourse(res.data))
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeCourse, setActiveCourse] = useState("")
  
  const activeCourseId = activeCourse?.id

  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm();

  const { refetch } = useGetCourses();

  const { data: getCourseById, isSuccess } = useGetCourseById({ courseId: activeCourseId });

  const { mutate: updateCourse } = useUpdateCourseById();

  const handleEdit = (data) => {
    const datas = {
      photo: data?.photo,
      name: data?.name,
      type: data?.type,
      beginning_date_course: data?.beginning_date_course,
      for_who: data?.for_who,
      weekly_number: data?.weekly_number - 0,
      duration: data?.duration,
      price: data?.price - 0,
    }
    updateCourse({
      ...datas,
      id: activeCourseId
    }, {
        onSuccess: () => {
          navigate("/admin/courses")
          refetch();
        }
    });
  };

  const { mutate: deleteCourse } = useDeleteCourseById();

  const handleDeleteCourse = (data) => {
    deleteCourse({ 
        ...data, 
        id: activeCourseId 
    }, {
        onSuccess: () => {
          navigate("/admin/courses")
          refetch();
        }
    });
  };

  useEffect(() => {
    if (isSuccess && activeCourseId) {
      reset({
        photo: getCourseById?.photo,
        name: getCourseById?.name,
        for_who: getCourseById?.for_who,
        type: getCourseById?.type,
        weekly_number: getCourseById?.weekly_number,
        duration: getCourseById?.duration,
        price: getCourseById?.price,
      });
    }
  }, [getCourseById]);

  const { refetch: refetchGroups } = useGetGroups()

  // const { } = useGetGroupById({ groupId: activeCourseId })

  const { data: groups, mutate: createGroup } = useCreateGroup();
  const handleCreateGroup = (groups) => {
    const datas = {
      name: groups?.name,
      beginning_date: groups?.beginning_date,
      end_date: groups?.end_date,
    }
    createGroup({
      course_id: activeCourseId,
      ...datas
    }, {
      onSuccess: () => {
        refetchGroups()
        onClose()
      }
    })
  }

  const groupsColumns = [
    {
      title: 'Название потока',
      dataIndex: 'name',
      key: 'name',
      width: 140,
    },
    {
      title: 'Учеников',
      dataIndex: 'number_of_students',
      key: 'number_of_students',
      width: 100,
    },
    {
      title: 'Изучили всё',
      dataIndex: 'done_all',
      key: 'done_all',
      width: 128,
    },
    {
      title: 'Не изучили всё',
      dataIndex: 'progress',
      key: 'progress',
      width: 128,
    },
    {
      title: 'Не приступали',
      dataIndex: 'not_all',
      key: 'not_all',
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
      dataIndex: 'end_date',
      key: 'end_date',
      width: 132,
    },
    {
      title: 'Статус',
      key: 'status',
      width: 160,
      render: (item) => {
        return (
          <div>
             <Button  
              padding="4px" 
              color="#4094F7"
              backgroundColor="#4094F726" 
              onClick={() => {
                onOpen()
                // setActiveUserId(item?.id)
              }}>
                Status
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
                // setActiveUserId(item?.id)
              }}>
              <img src={Edit} width={20} height={20} alt="edit" />
            </Button>
             {/* <Button  
              padding="4px" 
              colorScheme="transparent" 
              onClick={() => {
                onOpen()
                setActiveUserId(item?.id)
              }}>
              <img src={EyeView} width={20} height={20} alt="edit" />
            </Button> */}
          </div>
        );
      },
    },
  ];

  const groupsData = activeCourse?.groups;

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
    groupsColumns,
    groupsData,
    register,
    handleCreateGroup,
    handleSubmit,
    handleDeleteCourse,
    handleEdit,
    activeCourse,
    setActiveCourse,
  };
};
