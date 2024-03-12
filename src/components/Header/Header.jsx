import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";
import { BtnDownload } from "components/BtnDownload";
import { AddModal } from "components/AddModal";

export const Header = ({
  onOpen = () => {},
  isOpen,
  register = () => {},
  title , 
  onClose = () => {}, 
  handleAccept = () => {},
}) => {

  return (
    <header className={cls.header}>
      <Container >
        <AddModal handleAccept={handleAccept} register={register}  isOpen={isOpen} onClose={onClose} />
        <Box className={cls.wrapper}> 
          <h1 className={cls.title}>{title}</h1>
          <Box className={cls.wrapperLeft}>
            <BtnDownload /> 
            <SearchInput className={cls.searchInput}/>
            <Filter />
            <BtnAdd className={cls.btnAdd} onClick={onOpen}/>
          </Box>
        </Box>
      </Container>
    </header>
  ) 

};
