import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.scss'
import { BsBookmarkHeartFill } from "react-icons/bs";

function Header() {
    const { favorites } = useFavorites()
    return (
        <div className={styles.header}>
            <h1>
                <Link className={styles.mainLink} to={'/'}>Product store</Link>
                </h1>
            <div className={styles.info}>
            <Link className={styles.about} to={'/About'}>About</Link>
            <div className={styles.favicon}>
                <Link to="/favorites">
                <BsBookmarkHeartFill fontSize={30} color='#013225'/>
                </Link>
            <span>{favorites.length}</span>
            </div>
            </div>
        </div>
    )
}

export default Header