import { FaAnglesRight } from "react-icons/fa6";
import styles from './SkillCard.module.css'

const SkillCard = (props) => {
    return (
        <div className={styles.skillCard}>
            <div
                className={styles.frontCard}
            >
                <img className={styles.frontIMG} src={props.skill.imgLink} alt="img" />
                <p>{props.skill.title}</p>
            </div>
            <div className={styles.backCard}>
                {props.skill.items.map(item => (
                    <p key={item}>
                        <FaAnglesRight class={styles.backIcon}/> <span className={styles.itemSpan}>{item}</span>
                    </p>
                ))}
            </div>
        </div>
    )
}

export default SkillCard