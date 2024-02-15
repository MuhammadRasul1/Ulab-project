import cls from "./styles.module.scss";

export const BtnSubmit = (props ) => {
   return (
    <button type="submit" className={cls.btnSubmit} disabled={props.disabled}>{props.text}</button>
   ) 
}