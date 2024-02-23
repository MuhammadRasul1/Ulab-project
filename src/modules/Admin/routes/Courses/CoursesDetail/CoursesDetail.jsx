import cls from './styles.module.scss';
import { Button, FormControl, Input } from '@chakra-ui/react';
import { useCoursesDetailProps } from './useCoursesDetailProps';

export const CoursesDetail = () => {
  const { 
    id,
    navigate,
    course,
    handleSubmit,
    register,
    onSubmit,
  } = useCoursesDetailProps();

  return (
    <div>
      <h1>Course id: {id}</h1>
      <Button onClick={() => navigate(-1)}>Back</Button>
      <span>Created at:{course?.created_at} </span>
      <FormControl as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Title" {...register("title")} />
        <Button type="submit">Save</Button>
      </FormControl>
    </div>
  );
};