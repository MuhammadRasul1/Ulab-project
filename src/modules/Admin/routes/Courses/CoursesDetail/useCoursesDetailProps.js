import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import request from 'services/httpRequest';

export const useCoursesDetailProps = () => {

    const [detail, setDetail] = useState()
    const param = useParams()
    console.log(param)

    useEffect(() => {
        request.get(`course/${param.id}`)
        .then(res => setDetail(res.data))
    }, [])

  // const [activeCourseId, setActiveCourseId] = useState("")

  // const getCourseById = useGetCourseById({courseId: activeCourseId})

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  // const updatedUser = useUpdateCourse(id);
  const onSubmit = (data) => {
    // updatedUser.mutate({ login_name: data?.login_name });
  };

  return {
    // id,
    // course,
    detail,
    navigate,
    onSubmit,
    handleSubmit,
    register,
  };
};
