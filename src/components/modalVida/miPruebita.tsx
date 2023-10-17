import Modal from ".";
import { ModalStateNames, setModalState, useModalState } from "../../observers"
import { ModalContent1, ModalContent2, ModalContent3 } from "./modalContent";

const modalsContent = {
  [ModalStateNames.FIRST]:  (props?: any) => <ModalContent1 {...props} />,
  [ModalStateNames.SECOND]: ()=> <ModalContent2 />,
  [ModalStateNames.THIRD]: () => <ModalContent3 />
}

export const ModalPruebita = ()=>{
    const modalState = useModalState();

    return (<Modal hasClose onClose={()=>setModalState(undefined)} isOpen={!!modalState?.data}>
      {
        !!modalState?.data && modalsContent[modalState?.data?.name]({data: modalState.data.meta})
      }
    </Modal>)
}


