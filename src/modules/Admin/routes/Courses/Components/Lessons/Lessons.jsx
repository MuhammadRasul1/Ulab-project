import { Box, Button, FormControl, useDisclosure } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container, Draggable } from 'react-smooth-dnd';
import { useEffect, useRef, useState } from "react";
import DragnDrop from "assets/img/icon/dragndrop.svg";
import { AddModal } from "components/AddModal";
import { useCreateLesson } from "services/lessons.service";
import { useForm } from "react-hook-form";
import { Input } from "components/Input";
import { useNavigate } from "react-router-dom";
import { BtnAdd } from "components/BtnAdd";
import { EditIcon } from '@chakra-ui/icons'
import { useMutation } from "@tanstack/react-query";

export const Lessons = ({
  activeCourse 
}) => {
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(activeCourse.id)
  const [items, setItems] = useState([]);
  const [image, setImage] = useState()
  // console.log(items)

  useEffect(() => {
    setItems(activeCourse?.lesson_names)
  }, [items])

  const { 
    register, 
    handleSubmit, 
    reset 
  } = useForm();

  // const { mutate: createLesson } = useCreateLesson()

  // const { mutate: createLesson } = useMutation({ mutationFn: (data) => fetch('https://lms-service-xhvq.onrender.com/api/v1/upload', { method: 'POST', body: JSON.stringify(data) })})
    
  // const onSubmit = (data) => {
  //   createLesson({
  //   // course_id: activeCourse?.id,
  //   ...image
  //   }, {
  //     onSuccess: () => {
  //       // refetch();
  //       onClose()
  //     }
  //   })
  // }

  const fileInputRef = useRef(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('https://lms-service-xhvq.onrender.com/api/v1/upload', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        alert('Video uploaded successfully');
        onClose()
      } else {
        alert('Failed to upload video');
      }
    } catch (error) {
      alert('Error uploading video:', error);
    }
  }

  const onDrop = (dropResult) => {
    if (!dropResult.removedIndex) return;
    const newItems = [...items];
    newItems.splice(dropResult.addedIndex, 0, newItems.splice(dropResult.removedIndex, 1)[0]);
    setItems(newItems);
  };

  // const fileInputRef = useRef(null); 

  const handleClick = () => {
    fileInputRef.current.click(); 
  };
  return (
    <Box className={cls.wrapper}>
      <Container onDrop={onDrop}>
        <Box className={cls.wrapperTop}>
          <h2 className={cls.title}>Course chapters</h2>
          <BtnAdd onClick={onOpen} />
        </Box>
        {
        items?.map((item) => (
          <Draggable key={item.id}>
            <Box className={cls.wrapperBottom}>
              <Box className={cls.wrapperTitle}>
                <img src={DragnDrop} alt="dragndrop" width="10px" height="10px"/>
                <h3 className={cls.subtitle}>{item.name}</h3>
              </Box>
              <Button
                backgroundColor="transparent"   
                onClick={() => 
                  navigate(`/admin/courses/${activeCourse?.id}/${item.id}`)
                }
              >
                <EditIcon />
              </Button>
            </Box>
          </Draggable>
          ))
        }
      </Container>
      <AddModal handleAccept={onSubmit} register={register} isOpen={isOpen} onClose={onClose} >
          <FormControl as='form'>
            <Box className={cls.wrapperInput}>
              <label htmlFor="title">title</label>
              <Input
                type="text"
                placeholder="title"
                id="title"
                // register={register}
                name="name"
              />
            </Box>
            <Box className={cls.wrapperInput}>
              <label htmlFor="description">description</label>
              <textarea className={cls.desc} name="description" id="description" cols="10" rows="3"></textarea>
            </Box>
            <Box className={cls.wrapperInput}>
            <button className={cls.btn} onClick={handleClick} type="button">Выбрать видео</button>
              <video width={400} height={400} src={'https://firebasestorage.googleapis.com/v0/b/lms-service-415606.appspot.com/o/video.mp4?alt=media&token=8466d439-0058-4f10-bc21-2dd19b83fa06'} controls></video>
              <input
                className={cls.fileInput}
                type="file"
                ref={fileInputRef}
                register={register}
                name="file"
              />
            </Box>
          </FormControl>
        </AddModal>
    </Box>
  );
}