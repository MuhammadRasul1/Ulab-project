import cls from "./styles.module.scss";

export const StepList = () => {
    return (
        <ol className={cls.list}>
            <li className={cls.item}>
                1
            </li>
            <li className={cls.item}>
                2
            </li>
        </ol>
    )
}