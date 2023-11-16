import { NavLink } from "react-router-dom"
import { FaCloudDownloadAlt, FaAngleDoubleDown } from "react-icons/fa";

// css
import styles from './HomeBG.module.css'
// images

import myPic from '../../assets/images/myPic_tran.png'
import smoke from '../../assets/images/smoke.png'

const HomeBG = () => {
    return (
        <div>
            <div className={styles.homeContainer}>
                <div className={styles.leftContainer}>
                    <h1>Hello! I'm</h1>
                    <h1 className={styles.myName}>Tuan Nguyen</h1>
                    <h2>Fullstack Developer</h2>
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
                <FaAngleDoubleDown className={styles.FaAngleDoubleDown} />
            </div>
        </div>
    )
}

export default HomeBG