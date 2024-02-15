import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { SearchInput } from "components/SearchInput";
import { BtnAdd } from "components/BtnAdd";
import { Container } from "components/Container";
import { Filter } from "components/Filter";

export const Header = () => {

  return (
    <header className={cls.header}>
      <Container >
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
          <h1 className={cls.title}>Курсы</h1>
          <Box display="flex" alignItems="start">
            <SearchInput 
              className={cls.searchInput}
            />
            <Filter />
            <BtnAdd 
            className={cls.btnAdd}
            />
          </Box>
        </Box>
      </Container>
    </header>
  ) 

};
