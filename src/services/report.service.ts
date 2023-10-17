import { DataProvider } from "../types";
import { AxiosInstance } from 'axios';

export interface ReportResponse{
  name: string;
  values: number[]
}

interface ReportResponseUnsrialezd {
  nombre: string;
  valores: number[]
}

const parseReportResponse = ({nombre, valores}: ReportResponseUnsrialezd): ReportResponse  => ({
   name: nombre,
   values: valores
})



export class ReportService implements DataProvider<ReportResponse>{
  constructor(private client: AxiosInstance){}

  async getList(){
    const { data } = await this.client.get<ReportResponseUnsrialezd[]>(`/reports${this.client.getUri()? '' : '.json'}`)

    return data.map(parseReportResponse)
  }

  async getOne(){
    const { data } = await this.client.get<ReportResponse>('/report')

    return data
  }
  
}
