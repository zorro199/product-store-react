import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IProduct } from '../../types/product.types'
import styles from './ProductItem.module.scss'

interface IProductItem {
    product: IProduct
}

function ProductItem( {product}: IProductItem ) {
    const { favorites } = useFavorites()
    const { togleFavorites } = useActions()
    const isExist = favorites.some(p => p.id === product.id)
    return(
        <div className={styles.card} key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>Name: <span>{product.title}</span></h3>
            <p>{product.description}</p>
            <p className={styles.price}>Price: <span>{product.price}$</span></p>
            <button onClick={() => togleFavorites(product)}>
            { isExist ? 'Remove from favorites' : 'Add to favorites' }
            </button>
        </div>
    )
}

export default ProductItem