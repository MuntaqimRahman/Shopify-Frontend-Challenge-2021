import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { GetMovieTitles } from "../api/GetMovies";

import NominationContext from "../contexts/nomination";
import SearchContext from "../contexts/search";
import MovieItem from "./movie-item";

import ClipLoader from "react-spinners/ClipLoader";

const NominationSection = () => {
  const { searchQuery } = useContext(SearchContext);
  const { nominations, setNominations } = useContext(NominationContext);

  const [searchResults, setSearchResults] = useState([]);
  const [isGettingData, setIsGettingData] = useState(false);

  const getData = async () => {
    try {
      setIsGettingData(true);
      const data = await GetMovieTitles(searchQuery);
      setIsGettingData(false);

      if (data.Response === "True") {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      setSearchResults([]);
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      setSearchResults([]);
      return;
    }
    getData();
  }, [searchQuery]);

  const NominationContainer = styled.div`
    display: flex;
    flex-direction: row;
  `;

  const SearchResults = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    width: 75%;
  `;

  const NominationResults = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    margin-left: 2vmax;
    width: 20%;
  `;

  const SpinnerContainer = styled.div`
    align-self: center;
  `;

  const AddNomination = (
    newTitle: string,
    newYear: string,
    newPoster: string
  ) => {
    if (!Array.isArray(nominations)) {
      return;
    }

    setNominations([
      ...nominations,
      { Title: newTitle, Year: newYear, Poster: newPoster },
    ]);
  };

  const RemoveNomination = (newTitle: string) => {
    if (!Array.isArray(nominations)) {
      return;
    }

    const newNomination = nominations.filter(({ Title }) => Title !== newTitle);

    setNominations(newNomination);
  };

  const checkIfDisabled = (movieTitle: string) => {
    if (!Array.isArray(nominations)) {
      return;
    }

    if (nominations.length >= 5) {
      return true;
    }

    for (let i = 0; i < nominations.length; i++) {
      const title = nominations[i].Title;

      if (title === movieTitle) {
        return true;
      }
    }

    return false;
  };

  return (
    <NominationContainer>
      {
        <SearchResults>
          {isGettingData ? (
            <SpinnerContainer>
              <ClipLoader />
            </SpinnerContainer>
          ) : (
            Array.isArray(searchResults) &&
            <>
                
                {`Search results for "${searchQuery}"`}
            {searchResults.map((movieItem: any) => {
              return (
                <MovieItem
                  {...movieItem}
                  buttonText={"NOMINATE"}
                  buttonAction={AddNomination}
                  shouldGetDescription={true}
                  isDisabled={checkIfDisabled(movieItem.Title)}
                ></MovieItem>
              );
            })
        }
            </>
          )}
        </SearchResults>
      }

      <NominationResults>
          Nominations
        {Array.isArray(nominations) &&
          nominations.map((movieItem: any) => {
            return (
              <MovieItem
                {...movieItem}
                buttonText={"REMOVE"}
                buttonAction={RemoveNomination}
                shouldGetDescription={false}
              ></MovieItem>
            );
          })}
      </NominationResults>
    </NominationContainer>
  );
};

export default NominationSection;
