import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import BackArrow from "assets/img/icon/backArrow.svg";
import Eye from "assets/img/icon/EyeView.svg";
import Folder from "assets/img/icon/folder.svg";

export const Header = ({title}) => {

  return (
    <header className={cls.header}>
      <Container >
        <Box display="flex" alignItems="center" justifyContent="space-between"> 
            <Box display="flex" alignItems="center">
                <button className={cls.btnBack}>
                    <img src={BackArrow} alt="back arrow" />
                </button>
                <Box ml="8px" display="flex" alignItems="center">
                  <img src={Folder} alt="folder" width={24} height={24} />
                  <h1 className={cls.title}>{title}</h1>
                </Box>
            </Box>
            <button className={cls.btn}>
              <img src={Eye} alt="eye" width={24} height={24}/>
            </button>
        </Box>
      </Container>
    </header>
  ) 

};
