import Modal from ".";
import { ModalStateNames, setModalState, useModalState } from "../../observers"
import { ModalContent1, ModalContent2, ModalContent3 } from "./modalContent";

const modalsContent = {
  [ModalStateNames.FIRST]: <ModalContent1 />,
  [ModalStateNames.SECOND]: <ModalContent2 />,
  [ModalStateNames.THIRD]: <ModalContent3 />
}

export const ModalPruebita = ()=>{
    const modalState = useModalState();

    return (<Modal hasClose onClose={()=>setModalState(undefined)} isOpen={!!modalState?.name}>
      {
        !!modalState?.name && modalsContent[modalState?.name]
      }
    </Modal>)
}
