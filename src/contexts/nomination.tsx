import { createContext } from "react";

export interface INominationStates {
    nominations: any,
    setNominations: (nominations: any) => void
}

const NominationContext = createContext<INominationStates>({
    nominations: [],
    setNominations: (nominations: any) => {}
})

export const NominationContextConsumer = NominationContext.Consumer;
export const NominationContextProvider = NominationContext.Provider;
export default NominationContext; 