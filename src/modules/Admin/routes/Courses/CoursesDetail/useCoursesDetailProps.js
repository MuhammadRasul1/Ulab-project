import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const useCoursesDetailProps = () => {
  const { id } = useParams();

  // const [activeCourseId, setActiveCourseId] = useState("")

  // const getCourseById = useGetCourseById({courseId: activeCourseId})

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  // const updatedUser = useUpdateCourse(id);
  const onSubmit = (data) => {
    // updatedUser.mutate({ login_name: data?.login_name });
  };

  return {
    id,
    course,
    navigate,
    onSubmit,
    handleSubmit,
    register,
  };
};
