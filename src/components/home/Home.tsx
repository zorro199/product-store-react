import KnifeItem from '../knife-item/KnifeItem'
import styles from './Home.module.scss'
import Header from './Header'
import { useGetKnifeQuery } from '../../store/api'
import Pagination from './Pagination'
import { usePagination } from './usePagination'


function App() {
  const { isLoading, data } = useGetKnifeQuery(null)
  const { itemPerPage, currentItem, prevPage, nextPage ,paginate } = usePagination()

  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        {
          isLoading ? <div>Loading...</div>
          : data ? currentItem?.map(knife => <KnifeItem key={knife.id} knife={knife}/>)
          : <div>Knifes is not founded</div>
        }
    </div>
    <Pagination 
        itemPerPage={itemPerPage} 
        totalItem={data?.length}
        paginate={paginate} 
        />
        <div className={styles.buttons}>
          <button onClick={prevPage}>Назад</button>
          <button onClick={nextPage}>Вперед</button>
        </div>
    </div>
  )
}

export default App
