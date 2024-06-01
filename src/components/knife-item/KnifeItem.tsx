import { useActions } from '../../hooks/useActions'
import { useFavorites } from '../../hooks/useFavorites'
import { IKnife } from '../../types/knife.types'
import styles from './KnifeItem.module.scss'

interface IKnifeItem {
    knife: IKnife
}

function KnifeItem( {knife}: IKnifeItem ) {
    const { favorites } = useFavorites()
    const { togleFavorites } = useActions()
    const isExist = favorites.some(k => k.id === knife.id)
    return(
        <div className={styles.card} key={knife.id}>
            <img src={knife.image} alt={knife.name} />
            <h3>Name: <span>{knife.name}</span></h3>
            <p>Price: <span>{knife.price}</span></p>
            <button onClick={() => togleFavorites(knife)}>
            { isExist ? 'Remove from favorites' : 'Add to favorites' }
            </button>
        </div>
    )
}

export default KnifeItem