// node packages
import { HashLink } from 'react-router-hash-link'
// css
import styles from './NavBar.module.css'
// logo
import TuanSign from '../../assets/images/Tuan_signature.png'



const NavBar = () => {
    return (
        <nav>
            <div>
                <HashLink smooth to='/'>
                    <img src={TuanSign} alt="TuanNG" className={styles.navBarLogo} />
                </HashLink>
            </div>
            <div>
                <ul className={styles.navBarElements}>
                    <li>
                        <HashLink smooth to='/'>Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='#aboutMe'>About</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='#projects'>Project</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to='/contact'>Contact</HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar







// const NavBar = () => {
//     return (
//         <nav>
//             <div>
//                 <img src={TuanSign} alt="Tuan Signature"  className={styles.navBarLogo} />
//             </div>
//             <div>
//                 <ul className={styles.navBarElements}>
//                     <li>
//                         <HashLink to='/'>Home</HashLink>
//                     </li>
//                     <li>
//                         <HashLink to='/project'>Project</HashLink>
//                     </li>
//                     <li>
//                         <HashLink to='/about'>About</HashLink>
//                     </li>
//                     <li>
//                         <HashLink to='/contact'>Contact</HashLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default NavBar


