import cls from "./styles.module.scss";

export const CopyRight = (props) => {
    return (
        <span className={cls.text}>{props.text}</span>
    )
}