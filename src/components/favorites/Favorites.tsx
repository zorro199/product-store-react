import ProductItem from "../product-item/ProductItem"
import { useFavorites } from "../../hooks/useFavorites"
import styles from './Favorites.module.scss'

function Favorites() {
    const { favorites } = useFavorites()
    return(
        <div className={styles.favorites}>
            <h2>{favorites.length ? 'Ваши избранные ножи' : 'Вы еще не выбрали('}</h2>
        <div className={styles.main}>
            {favorites.map(product =>
                    <ProductItem key={product.id} product={product}/>
            )}
        </div>
        </div>
    )
}

export default Favorites

