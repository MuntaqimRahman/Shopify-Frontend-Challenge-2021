import {useContext, useEffect} from "react";
import styled from "styled-components";
import Header from "../components/header";
import NominationSection from "../components/NominationSection";
import SearchContext from "../contexts/search";
import NominationContext from "../contexts/nomination";
import Banner from "../components/banner";

const Homepage = () => {

    const {searchQuery} = useContext(SearchContext);

    const{nominations} = useContext(NominationContext);
    
    return(
        <div>
            {
                Array.isArray(nominations) && nominations.length >= 5 &&
                    <Banner/>
            }
            <Header/>
            <NominationSection/>
        </div>
    )
}

export default Homepage;