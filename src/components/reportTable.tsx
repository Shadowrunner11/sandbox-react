import { useDataProvider } from "../dataProvider"

import { useQuery} from '@tanstack/react-query'
import { ReportResponse } from "../services/report.service"

export const ReportTable = ()=>{
  const reportService = useDataProvider('reports')

  const { data } = useQuery({
    queryFn: async ()=> await reportService.getList(),
    queryKey: ['report table']
  })

  return (<div>
    {data?.map(({name}: ReportResponse)=><div key={name}>{name}</div>)}
  </div>)
}
