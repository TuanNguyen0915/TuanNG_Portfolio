import { NavLink } from "react-router-dom"
import { HashLink } from "react-router-hash-link";
import { FaCloudDownloadAlt, FaAngleDoubleDown } from "react-icons/fa";

// css
import styles from './HomeBG.module.css'
// images

import myPic from '../../assets/images/myPic_tran.png'
import smoke from '../../assets/images/smoke.png'
import picCircle from '../../assets/images/pic_circle.jpeg'

const HomeBG = () => {
    return (
        <div>
            <div className={styles.homeContainer}>
                <div className={styles.leftContainer}>
                    <img className={styles.picCircle} src={picCircle} alt="my-img" />
                    <h1>Hello! I'm Tuan Nguyen</h1>
                    <h2>I'm a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions. Carefulness and responsibility are two skills I learned while working in my previous career, which helped me approach SWE more easily, and work more efficiently. I am interested in technology and techniques in the full-stack development field to keep my passion for it.</h2>
                    <div className={styles.homeBtn}>
                        <NavLink to='/project' className='btn'>
                            Project
                        </NavLink>
                        <NavLink to='/project' className='btn btn-light'>
                            Resume <FaCloudDownloadAlt className={styles.clodDown} />
                        </NavLink>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <img className={styles.myPic} src={myPic} alt="Tuan's picture" />
                    <img className={styles.smoke} src={smoke} alt="smoke" />
                </div>
            </div>
            {/* Narrow */}
            <div className={styles.narrow}>
                <HashLink smooth to='#TuanSkills'>
                    <FaAngleDoubleDown className={styles.FaAngleDoubleDown} />
                </HashLink>
            </div>
        </div>
    )
}

export default HomeBG