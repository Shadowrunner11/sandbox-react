import { PropsWithChildren, useContext } from "react"
import { ModalStateNames, setNextState, setPrevState } from "../../observers"
import { productDetail } from "../providers/testWithref"

const handleNext2 = ()=>{setNextState({
  name:ModalStateNames.SECOND
})}



const handleNext3 = ()=>{setNextState({
  name: ModalStateNames.THIRD
})}

interface ModalDataProps extends PropsWithChildren{
  data?: Record<string, unknown>
}

export const ModalContent1 = ({children, data}:ModalDataProps)=> {
  return (
    <div>
      First Modal
      {String(data?.productId)}
      <button onClick={handleNext2}>
        Next
        {children}
      </button>
    </div>
  )
}


export const PrevButton = ()=>(<button onClick={()=>setPrevState()}>
  Prev
</button>)

export const ModalContent2 =  ()=>{
  return (
    <div>
      Second Modal
      <PrevButton />
      <button onClick={handleNext3}>
        Next
      </button>
    </div>
  )
}


export const ModalContent3 =  ()=>{
  return (
    <div>
      THIRD MODAL
      <PrevButton />
    </div>
  )
}
