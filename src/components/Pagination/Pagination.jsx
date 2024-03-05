import { Container } from "components/Container";
import cls from "./styles.module.scss";
import { Box } from "@chakra-ui/react";

export const Pagination = () => {

  return(
    <Box className={cls.footer}>
      <Container>
        <nav className={cls.nav}>
          <ol className={cls.navList}>
            <li className={cls.navItem}>
                <button className={cls.link}>1</button>
            </li>
            <li className={cls.navItem}>
                <button className={cls.link}>2</button>
            </li>
            <li className={cls.navItem}>
                <button className={cls.link}>3</button>
            </li>
          </ol>
        </nav>
      </Container>
    </Box>
  ) 
};