import { dataContext } from './dataProvider'
import { ReportService } from './services/report.service'
import axios from 'axios'
import { ReportTable } from './components/reportTable'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ModalPruebita } from './components/modalVida/miPruebita'
import { ModalStateNames, setModalState } from './observers'
import { ProductDetail, productDetail } from './components/providers/testWithref'
import { useContext } from 'react'
const OpenButton = ()=>{
  const prodc = useContext(productDetail)

  const HnadenClick = ()=>{
    const randomId = Math.random()

    console.log(randomId)

    setModalState({
      data: {
        name: ModalStateNames.FIRST,
        meta: {
          productId: randomId
        }
      }})
  }
  
  return (
  <>
  <button 
    onClick={HnadenClick}>
      Open modal
  </button>
  <button onClick={()=>console.log(prodc.productId = Math.random())}>
    Set prodcut Id
  </button>
  </>)
}

function App() {
  return (
    <ProductDetail>
      <OpenButton />
      <ModalPruebita />
    </ProductDetail>
  )
}

export default App
