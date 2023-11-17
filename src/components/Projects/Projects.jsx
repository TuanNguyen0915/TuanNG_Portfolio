import { useState } from 'react'
import styles from './Projects.module.css'
import ProjectCard from '../ProjectCard/ProjectCard'

import { myProjects } from '../../data/data.js'

const Projects = () => {


    const [active, setActive] = useState(1)
    const handleOnClick = (currId) => {
        setActive(currId)
    }
    console.log(active);

    return (
        <main className={styles.projectsMain} id='projects'>
            <div className={styles.projectsSection}>
                <div className={styles.infoDecs}>
                    <h2>Case Studies</h2>
                    <h1>Projects</h1>
                    <p>
                        These projects demonstrate my expertise with practical examples of some of my work, including brief descriptions and links to code repositories and live demos. They showcase my ability to tackle intricate challenges, adapt to various technologies, and efficiently oversee projects.
                    </p>
                </div>
            </div>
            <div className={styles.projectItems}>
                {myProjects.map(item => (
                    <ProjectCard
                        key={item.name}
                        project={item}
                        active={active}
                        handleOnClick={handleOnClick}
                    />
                ))}
            </div>
        </main >
    )
}

export default Projects
