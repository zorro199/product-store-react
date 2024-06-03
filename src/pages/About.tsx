import Header from '../components/Header/Header'
import styles from '../components/favorites/Favorites.module.scss'

function About() {
    return (
        <div className={styles.wrapper}>
        <Header />
            <div className={styles.favorites}>
                <p>
                    Сайт представляет собой онлайн магазин товаров. 
                    И является моим пет проектом. <br />
                <a href="https://github.com/zorro199" 
                style={{textDecoration: 'none', cursor: 'pointer', color: 'green'}}>
                    Мой гитхаб
                </a>
            </p>
            </div>
            <footer>
                <p>&copy; Product store by Zaur</p>
            </footer>
        </div>
    )
}

export default About