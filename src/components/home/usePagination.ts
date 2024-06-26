import { useState, useEffect } from "react"
import { useGetProductQuery } from "../../store/api"


export function usePagination() {
  const { data } = useGetProductQuery(null)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(6)
  const lastItemIndex = currentPage * itemPerPage
  const firstItemIndex = lastItemIndex - itemPerPage
  const currentItem = data?.slice(firstItemIndex, lastItemIndex)

  const prevPage = () => setCurrentPage(prev => prev + 1)
  const nextPage = () => setCurrentPage(next => next + 1)

  useEffect(() => {
    data
  }, [])
  
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  return { itemPerPage, currentItem, prevPage, nextPage ,paginate }
} 