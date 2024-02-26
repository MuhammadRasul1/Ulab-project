import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import BackArrow from "assets/img/icon/backArrow.svg";

export const Header = () => {

  return (
    <header className={cls.header}>
      <Container >
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
            <Box>
                <button>
                    <img src={BackArrow} alt="back arrow" />
                </button>
                <h1 className={cls.title}>Курсы</h1>
            </Box>
        </Box>
      </Container>
    </header>
  ) 

};
