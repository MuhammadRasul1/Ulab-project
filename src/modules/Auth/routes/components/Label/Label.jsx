import cls from "./styles.module.scss";

export const Label = ({ children, ...props }) => {
    return (
        <label className={cls.label} htmlFor={props.id}>
            {children}
            <span className={cls.required}>*</span>
        </label>
    ) 
}