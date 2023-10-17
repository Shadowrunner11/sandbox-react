import { PropsWithChildren } from "react"
import { ModalStateNames, setNextState, setPrevState } from "../../observers"

const handleNext2 = ()=>{setNextState(ModalStateNames.SECOND)}



const handleNext3 = ()=>{setNextState(ModalStateNames.THIRD)}

export const ModalContent1 = ({children}:PropsWithChildren)=> {
  
  return (
    <div>
      First Modal
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
