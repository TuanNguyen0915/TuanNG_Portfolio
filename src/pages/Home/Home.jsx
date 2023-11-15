import NavBar from "../../components/NavBar/NavBar"
import styles from './Home.module.css'
import myPic from '../../assets/images/myPic_tran.png'
import smoke from '../../assets/images/smoke.png'

const Home = () => {
    return (
        <main>
            <NavBar />
            {/* <div className={styles.homeContainer}>
                <div className={styles.homeBG}>
                    <div className={styles.mask}>
                        <img className={styles.backgroundIMG} src={homeBG} alt="word network" />
                    </div>
                </div>
                <div className={styles.homeContent}>
                    <h1 className={styles.homeTitle}>Hello! I&apos;m</h1>
                    <h1 className={styles.homeTitle}>Tuan Nguyen</h1>
                    <h2 className={styles.homeJob}>Software Engineer</h2>
                </div>
            </div> */}
            <div className={styles.homeContainer}>
                <div className={styles.leftContainer}>
                    <h1 className={styles.homeTitle}>Hello! I&apos;m</h1>
                    <h1 className={styles.homeTitle}>Tuan Nguyen</h1>
                    <h2 className={styles.homeJob}>Software Engineer</h2>
                </div>
                <div className={styles.rightContainer}>
                    <img className={styles.myPicture} src={myPic} alt='TuanNG' />
                    <img className={styles.smoke} src={smoke} alt='TuanNG' />
                </div>
            </div>
        </main>
    )
}

export default Home