import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";

export const Header = () => {

  return (
    <header className={cls.header}>
      <Box display="flex" alignItems="center" justifyContent="center"> 
        <h1 className={cls.title}>Обучение</h1>
        <Box>
          <div>
            
          </div>
        </Box>
      </Box>
    </header>
  ) 

};
