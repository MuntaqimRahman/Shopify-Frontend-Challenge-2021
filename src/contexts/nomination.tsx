import { createContext } from "react";

export interface NominationObject {
    Title: string,
    Year: string,
    Poster: string
}

export interface INominationStates {
    nominations: NominationObject[] | null,
    setNominations: (nominations: any) => void
}

const NominationContext = createContext<INominationStates>({
    nominations: [],
    setNominations: (nominations: NominationObject[]) => {}
})

export const NominationContextConsumer = NominationContext.Consumer;
export const NominationContextProvider = NominationContext.Provider;
export default NominationContext; 