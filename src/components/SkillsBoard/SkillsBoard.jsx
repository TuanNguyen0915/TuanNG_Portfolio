import SkillCard from '../SkillCard/SkillCard'
import styles from './SkillsBoard.module.css'
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';
import { skillsSet } from '../../data/data'

const SkillsBoard = () => {
    return (
        <main className={styles.skillsSection} id='TuanSkills'>
            {/* <h1>Dive into Tuan's ToolsBox</h1> */}
            <div className={styles.infoDecs}>
                <h2>INTRODUCTION</h2>
                <h1>Software Engineer</h1>
                <p>I'm a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.</p>
            </div>
            <div className={styles.skillsCards}>
                {skillsSet.map(skill => (
                    <SkillCard key={skill} skill={skill} />
                ))}
            </div>
            <div className={styles.narrow}>
                <HashLink smooth to='#projects'>
                    <FaAngleDoubleDown className={styles.FaAngleDoubleDown} />
                </HashLink>
                <HashLink smooth to='#homepage'>
                    <FaAngleDoubleUp className={styles.FaAngleDoubleUp} />
                </HashLink>
            </div>
        </main>
    )
}


export default SkillsBoard