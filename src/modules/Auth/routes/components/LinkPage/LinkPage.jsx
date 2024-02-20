import cls from "./styles.module.scss";
import { Link } from "react-router-dom";

export const LinkPage = (props) => {
    return (
        <Link className={cls.link} to={props.to}>{props.text}</Link> 
    );
}

// onClick={() => navigate(-1)}