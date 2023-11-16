import SkillCard from '../SkillCard/SkillCard'
import styles from './SkillsBoard.module.css'

import skillsSet from '../../data/data.js'

const SkillsBoard = () => {
    return (
        <main className={styles.skillsSection} id='TuanSkills'>
            <h1>Dive into Tuan's ToolsBox</h1>
            <div className={styles.skillsCards}>
                {skillsSet.map(skill => (
                    <SkillCard key={skill} skill={skill} />
                ))}
            </div>
        </main>
    )
}


export default SkillsBoard