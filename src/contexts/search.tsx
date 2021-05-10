import { createContext } from "react";

export interface ISearchQueryStates {
    searchQuery: string,
    setSearchQuery: (searchQuery: string) => void
}

const SearchContext = createContext<ISearchQueryStates>({
    searchQuery: "",
    setSearchQuery: (searchQuery: string) => {}
})

export const SearchContextConsumer = SearchContext.Consumer;
export const SearchContextProvider = SearchContext.Provider;
export default SearchContext; 