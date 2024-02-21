import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";
import { BtnDownload } from "components/BtnDownload";
import { useDisclosure } from "@chakra-ui/react";
import { AddModal } from "../AddModal";

export const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <header className={cls.header}>
      <Container >
        <AddModal isOpen={isOpen} onClose={onClose} />
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
          <h1 className={cls.title}>Курсы</h1>
          <Box display="flex" alignItems="start">
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
