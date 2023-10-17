import { BehaviorSubject } from "rxjs";
import { ControlState, orderControlsLense } from "../utils";

export enum ModalStateNames {
  FIRST = 'cart',
  SECOND = 'second',
  THIRD = 'third'
}

interface ModalData {
  name: ModalStateNames;
  meta?: Record<string, unknown>
}

export const modalState$ = new BehaviorSubject<ControlState<ModalData> | undefined>(undefined)

export const {
  setState:setModalState, 
  useObserverState: useModalState,
  setNextState,
  setPrevState
} = orderControlsLense<ModalData>(modalState$)

