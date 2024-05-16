import KnifeItem from '../knife-item/KnifeItem'
import styles from './Home.module.scss'
import Header from './Header'
import { useGetKnifeQuery } from '../../store/api'


function App() {
  const { isLoading, data } = useGetKnifeQuery(null)
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.main}>
        {
          isLoading ? <div>Loading...</div>
          : data ? data.map(knife => <KnifeItem key={knife.id} knife={knife} />)
          : <div>Knifes is not founded</div>
        }
    </div>
    </div>
  )
}

export default App
