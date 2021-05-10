import {useContext, useEffect} from "react";
import styled from "styled-components";
import Header from "../components/header";
import NominationSection from "../components/NominationSection";
import SearchContext from "../contexts/search";
import NominationContext from "../contexts/nomination";

const Homepage = () => {

    const {searchQuery} = useContext(SearchContext);

    const{nominations} = useContext(NominationContext);

    useEffect(() => {
        console.log('SEARCH: ');
        console.log(searchQuery);

        console.log("NOMINATIONS: ");
        console.log(nominations);
    })

    return(
        <div>
            <Header/>
            <NominationSection/>
        </div>
    )
}

export default Homepage;