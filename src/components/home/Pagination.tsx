import styles from './Home.module.scss'

function Pagination({itemPerPage, totalItem, paginate}: any) {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <div>
            <div className={styles.pagination}>
                {
                    pageNumbers.map(num => (
                        <div 
                            onClick={() => paginate(num)}
                            className={styles.pageItem} 
                            key={num}>
                                {num}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Pagination