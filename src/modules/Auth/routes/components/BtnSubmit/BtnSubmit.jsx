import cls from "./styles.module.scss";

export const BtnSubmit = ({ text, disabled } ) => {
   return (
    <button type="submit" className={cls.btnSubmit} disabled={disabled}>{text}</button>
   ) 
}