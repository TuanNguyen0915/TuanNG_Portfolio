// node packages
import NavBar from "../../components/NavBar/NavBar"
import HomeBG from "../../components/HomeBG/HomeBG"

// css
import styles from './Home.module.css'

// images

const Home = () => {
    return (
        <main>
            <NavBar />
            {/* Home Background */}
            <HomeBG />
            {/* Skills */}
            <div style={styles.skillsBoard}>
                <h1>Dive into Tuan's Toolbox</h1>

            </div>
        </main>
    )
}

export default Home




// import { NavLink } from "react-router-dom"
// import styles from './Home.module.css'
// import myPic from '../../assets/images/myPic_tran.png'
// import smoke from '../../assets/images/smoke.png'

// const Home = () => {
//     return (
//         <main>
//             <NavBar />
//             <div className={styles.homeContainer}>
//                 <div className={styles.leftContainer}>
//                     <h1 className={styles.homeTitle}>Hello! I&apos;m</h1>
//                     <h1 className={styles.homeTitle}>Tuan Nguyen</h1>
//                     <h2 className={styles.homeJob}>Software Engineer</h2>
//                     <NavLink to='/project'>
//                         <button className={styles.btn}>
//                             Project
//                         </button>
//                     </NavLink>
//                 </div>
//                 <div className={styles.rightContainer}>
//                     <img className={styles.myPicture} src={myPic} alt='TuanNG' />
//                     <img className={styles.smoke} src={smoke} alt='TuanNG' />
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Home