import { dataContext } from './dataProvider'
import { ReportService } from './services/report.service'
import axios from 'axios'
import { ReportTable } from './components/reportTable'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ModalPruebita } from './components/modalVida/miPruebita'
import { ModalStateNames, setModalState } from './observers'


function App() {
  return (
    <>
      <button onClick={()=>setModalState({
        name: ModalStateNames.FIRST
      })}>Open modal</button>
      <ModalPruebita />
    </>
  )
}

export default App
