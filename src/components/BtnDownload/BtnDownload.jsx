import cls from "./styles.module.scss";
import DownloadImg from "assets/img/icon/download.svg";

export const BtnDownload = ({
    download = () => {},
}) => {
    return (
        <button onClick={download} className={cls.btnDownload}>
            <img src={DownloadImg} alt="Download" width={20} height={20} />
        </button>
    );
}