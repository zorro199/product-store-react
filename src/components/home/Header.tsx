import { Link } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import styles from './Home.module.scss'
import { BsBookmarkHeartFill } from "react-icons/bs";

function Header() {
    const { favorites } = useFavorites()
    return (
        <div className={styles.header}>
            <h1>Авторские ножи, и не только!</h1>
            <div className={styles.favicon}>
                <Link to="/favorites">
                <BsBookmarkHeartFill fontSize={30} color='#c0fff7'/>
                </Link>
            <span>{favorites.length}</span>
            </div>
        </div>
    )
}

export default Header