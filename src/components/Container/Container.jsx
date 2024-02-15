import cls from "./styles.module.scss";

export const Container = ({ children }) => {

    return (
        <div className={cls.container}>
            {children}
        </div>
    )
}