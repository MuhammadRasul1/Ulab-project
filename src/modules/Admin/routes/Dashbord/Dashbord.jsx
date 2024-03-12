import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import { Container } from "components/Container";
import { Header } from "components/Header";
import { useDashbordProps } from "./useDashbordProps";

export const Dashbord = () => {

    const {
        list,
    } = useDashbordProps();
    

    return (
        <Box className={cls.dashbord}>
            <Container>
                <Header 
                    title="Дашборд"
                />
                <ul className={cls.list}>
                    {
                        list?.map((item, index) => (
                            <li className={cls.item} key={index}> 
                                <Box className={cls.wrapperText}>
                                    <span className={cls.count}>{item?.count}</span>
                                    <h2 className={cls.subtitle}>{item?.title}</h2>
                                </Box>
                                <img src={item?.src} alt={item?.alt} width={64} height={64} />
                            </li>
                        ))
                    }
                </ul>
            </Container>
        </Box>
    )
} 