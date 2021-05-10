import { useContext, useEffect } from "react";
import styled from "styled-components";

import {GetMovieTitles} from "../api/GetMovies";

import NominationContext from "../contexts/nomination";
import SearchContext from "../contexts/search";
import SearchResult from "../components/search-result";


const NominationSection = () => {

    const {searchQuery} = useContext(SearchContext);
    const {nominations,setNominations} = useContext(NominationContext);

    const getData = async () => {
        
        try{
            const data = await GetMovieTitles(searchQuery);
            console.log("DATA: ");
            console.log(data);

            if(data.response = "True"){
                setNominations(data.Search);
            }

        } catch(err){
            console.log(err);
        }


    }

    useEffect(() => {
        if(searchQuery === ""){
            return;
        }

        getData();
    },[searchQuery])

    const NominationContainer = styled.div`
        display: flex;
        flex-direction: row;
    `

    const SearchResults = styled.div`
        display: flex;
        flex-direction: column;
        width: 75%;
    `

    return(
        <NominationContainer>
            <SearchResults>
                {
                    Array.isArray(nominations) &&
                        nominations.map((movieItem) => {
                            <SearchResult {...movieItem} ></SearchResult>
                        })
                }
            </SearchResults>
        </NominationContainer>
    )

}

export default NominationSection;