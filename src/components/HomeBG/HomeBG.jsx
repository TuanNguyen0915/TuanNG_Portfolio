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
            <div className={styles.homeContainer} id="homepage">
                <div className={styles.leftContainer}>
                    <img className={styles.picCircle} src={picCircle} alt="my-img" />
                    <h1>Hi, I'm </h1>
                    <h1>Tuan Nguyen</h1>
                    <h2>I'm a full-stack software engineer who enjoys building apps for accessible and intuitive design to give the customer the best and simplest way solutions.</h2>
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