import Styles from "./index.module.css"
import mobileImg from "../../assets/mobileImg.png"

const showComponent = () => {
    return (
        <div className={Styles.Container}>
            <img src={mobileImg} alt='mobile image' />
        </div>
    )
}

export default showComponent