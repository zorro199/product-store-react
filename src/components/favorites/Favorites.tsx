import { useFavorites } from "../../hooks/useFavorites"
import styles from './Favorites.module.scss'
import Header from "../Header/Header"
import FavoriteItem from "../product-item/FavoriteItem"

function Favorites() {
    const { favorites } = useFavorites()
    return(
        <div className={styles.wrapper}>
            <Header />
            <h2>{favorites.length ? 'Favorites' : 'Not founded favorites('}</h2>
        <div className={styles.favorites}>
        {favorites.map(product => 
                <FavoriteItem key={product.id} product={product} />
        )}
        </div>
        <footer>
          <p>&copy; Product store by Zaur</p>
          </footer>
        </div>
    )
}

export default Favorites