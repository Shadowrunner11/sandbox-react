import { createContext, useContext } from "react";
import { DataProvider } from "./types";
import { type ReportService } from "./services/report.service";


const defaultContextValue = {
  'reports': undefined,
  'candidatesInfo': undefined
}

interface ContextProviders {
  reports?: ReportService,
  candidatesInfo?: DataProvider
}

type ContextKey = keyof typeof defaultContextValue

export const dataContext = createContext<ContextProviders>(defaultContextValue)

export const useDataProvider = (resource: ContextKey) => {
  const provider = useContext(dataContext)[resource]

  if(!provider)
    throw new Error('no hay provider')

  return provider
}
  

