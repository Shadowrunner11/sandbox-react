import { BehaviorSubject } from "rxjs";
import { ControlState, orderControlsLense } from "../utils";

export enum ModalStateNames {
  FIRST = 'cart',
  SECOND = 'second',
  THIRD = 'third'
}

export const modalState$ = new BehaviorSubject<ControlState<ModalStateNames> | undefined>(undefined)

export const {
  setState:setModalState, 
  useObserverState: useModalState,
  setNextState,
  setPrevState
} = orderControlsLense<ModalStateNames>(modalState$)

