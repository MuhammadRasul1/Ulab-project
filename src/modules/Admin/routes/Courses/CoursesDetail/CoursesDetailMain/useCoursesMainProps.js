import { useGetCoursesById, useUpdateCourse } from 'api';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export const useCoursesDetailMainProps = () => {
  const { id } = useParams();

  const { data: course } = useGetCoursesById();

  const { handleSubmit, register } = useForm();

  const navigate = useNavigate();

  const updatedUser = useUpdateCourse(id);
  const onSubmit = (data) => {
    updatedUser.mutate({ login_name: data?.login_name });
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
