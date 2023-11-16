// node packages
import { NavLink } from 'react-router-dom';
// css
import styles from './NavBar.module.css'
// logo
import TuanSign from '../../assets/images/Tuan_signature.png'



const NavBar = () => {
    return (
        <nav>
            <div>
                <NavLink to='/'>
                    <img src={TuanSign} alt="TuanNG" className={styles.navBarLogo} />
                </NavLink>
            </div>
            <div>
                <ul className={styles.navBarElements}>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='project'>Project</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact'>Contact</NavLink>
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
//                         <NavLink to='/'>Home</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/project'>Project</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/about'>About</NavLink>
//                     </li>
//                     <li>
//                         <NavLink to='/contact'>Contact</NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default NavBar


