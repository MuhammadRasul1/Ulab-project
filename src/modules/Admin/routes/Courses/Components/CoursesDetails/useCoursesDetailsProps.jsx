import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useDeleteCourseById, useGetCourses, useGetCourseById, useCreateCourse, useUpdateCourseById } from 'services/courses.service';
import { useNavigate, useParams } from 'react-router-dom';
import request from 'services/httpRequest';
import { useToast } from '@chakra-ui/react';
export const useCoursesDetailsProps = () => {

  const [isOpen, setOpen] = useState(false);
  const [activeCourse, setActiveCourse] = useState("")
  
  const activeCourseId = activeCourse?.id

  const toast = useToast()

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    reset();
  };
  
  const param = useParams();
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm();

  useEffect(() => {
    request.get(`course/${param.id}`)
    .then(res => setActiveCourse(res.data))
  }, [])

  const { refetch } = useGetCourses();

  const { data: getCourseById, isSuccess } = useGetCourseById({ courseId: activeCourseId });

  const { mutate: updateCourse } = useUpdateCourseById();

  const handleUpdateCourse = (res) => {
    const data = {
      photo: res?.photo,
      name: res?.name,
      type: res?.type,
      beginning_date_course: res?.beginning_date_course,
      for_who: res?.for_who,
      weekly_number: res?.weekly_number - 0,
      duration: res?.duration,
      price: res?.price - 0,
    }
    updateCourse({
      id: activeCourseId,
      ...data
    }, {
        onSuccess: () => {
          navigate("/admin/courses")
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: "Вы успешно изменили данные курса",
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
    });
  };

  const { mutate: deleteCourse } = useDeleteCourseById();

  const handleDeleteCourse = (data) => {
    deleteCourse({ 
      id: activeCourseId,
      ...data 
    }, {
        onSuccess: () => {
          navigate("/admin/courses")
          refetch();
          toast({
            position: 'top center',
            duration: 3000,
            isClosable: true,
            title: "Вы успешно удалили курс",
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

  return {
    isOpen,
    handleOpen,
    handleClose,
    register,
    handleSubmit,
    handleDeleteCourse,
    handleUpdateCourse,
    activeCourse,
  };
};
