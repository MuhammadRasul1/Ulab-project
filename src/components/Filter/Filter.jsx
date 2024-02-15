import { Box } from "@chakra-ui/react";
import cls from "./styles.module.scss";
import FilterImg from "assets/img/icon/filter.svg";

export const Filter = () => {
    return (
        <Box className={cls.wrapper}>
            <img src={FilterImg} alt="filter" width={20} height={20} />
            <select className={cls.select} name="search__filter" id="search__filter">
                <option value="Filter by Region" selected>Filter</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
            </select>
        </Box>
    )
}