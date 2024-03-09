import { Box, Button, Heading } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Select } from "components/Select";
import { Container, Draggable } from 'react-smooth-dnd';
import { useState } from "react";
import DragnDrop from "assets/img/icon/dragndrop.svg";

export const Lessons = () => {
  // const [isMounted, setIsMounted] = useState(false);
  // const [chapters, setChapters] = useState(items);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // useEffect(() => {
  //   setChapters(items);
  // }, [items]);

  // const onDragEnd = (result) => {
  //   // if (!result.destination) return;

  //   const items = Array.from(chapters);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);

  //   const startIndex = Math.min(result.source.index, result.destination.index);
  //   const endIndex = Math.max(result.source.index, result.destination.index);

  //   const updatedChapters = items.slice(startIndex, endIndex + 1);

  //   setChapters(items);

  //   const bulkUpdateData = updatedChapters.map((chapter) => ({
  //     id: chapter.id,
  //     position: items.findIndex((item) => item.id === chapter.id)
  //   }));

  // onReorder(bulkUpdateData);
  // };
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);

  const onDrop = (dropResult) => {
    if (!dropResult.removedIndex) return;
    const newItems = [...items];
    newItems.splice(dropResult.addedIndex, 0, newItems.splice(dropResult.removedIndex, 1)[0]);
    setItems(newItems);
  };
  return (
    <Box className="App" display="flex" justifyContent="space-between">
      <Box className={cls.wrapperLeft}>
        <Box className={cls.wrapper}>
          <label  htmlFor="title">Title</label>
          <input className={cls.input} name="title" id="title" type="text" placeholder="Введите заголовок" />
        </Box>
        <Box className={cls.wrapper}>
          <label  htmlFor="description">Chapter description</label>
          <input className={cls.input} name="description" id="description" type="text" placeholder="Введите заголовок" />
        </Box>
      </Box>
      <Container style={{ width: '500px', backgroundColor: '#EBEDEE' }} onDrop={onDrop}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <strong>Course chapters</strong>
          <button>+ Add Chapter</button>
        </Box>
        <Box display="flex" flexDirection="column">
          <input className={cls.input} type="text" />
          <Button backgroundColor="#4094F7">Save</Button>
        </Box>
        {
        items.map((item) => (
          <Draggable key={item.id}>
            <Box>
              <Box display="flex" alignItems="center">
                <img src={DragnDrop} alt="dragndrop" />
                <Box className="item" ml={2}>{item.name}</Box>
              </Box>
            </Box>
          </Draggable>
          ))
        }
      </Container>
    </Box>
  );
}

 // <Box display="flex">
      
      /* <Box className={cls.wrapperLeft}>
        <Box className={cls.wrapper}>
          <label  htmlFor="title">Title</label>
          <input className={cls.input} name="title" id="title" type="text" placeholder="Введите заголовок" />
        </Box>
        <Box className={cls.wrapper}>
          <label  htmlFor="description">Chapter description</label>
          <input className={cls.input} name="description" id="description" type="text" placeholder="Введите заголовок" />
        </Box>
      </Box>
      <Box className={cls.wrapperRight}>
        asd
      </Box> */
    // </Box>