import { useEffect, useState } from "react";
import type { BehaviorSubject } from "rxjs";

export interface ControlState<StateNames>{
  name?: StateNames;
  previous?: ControlState<StateNames>
}

export function bindLense<T =unknown>(subject: BehaviorSubject<T>):[(nextValue: T )=> void, () => T]{
  return [
    value => subject.next(value),
    ()=>{
      const [ value, setValue ] = useState<T>(subject.value)

      useEffect(()=>{
        const subscription = subject.subscribe(setValue);

        return ()=> subscription.unsubscribe();
      }, [])

      return value
    }
  ]
}


export function orderControlsLense<T>(subject: BehaviorSubject<ControlState<T> | undefined>){
  const [setState, useObserverState] = bindLense(subject)
  return {
    setState,
    useObserverState,
    setPrevState: () => setState(subject.value?.previous),
    setNextState: (nextStateName: T) => setState({
    name:nextStateName,
    previous: subject.value
  })}
}
