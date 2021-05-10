import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

import { TileContainer } from "../styling/tile";
import { GetMovieByTitle } from "../api/GetMovies";


interface SearchResultProps {
  Title: string;
  Year?: string;
  Poster?: string;
  shouldGetDescription: boolean;
  buttonText?: string;
  buttonAction: (newTitle: string, newYear?: string, newPoster?: string) => void;
  isDisabled?: boolean;
}

const SearchResult: FC<SearchResultProps> = ({ Title, Year, Poster,shouldGetDescription, buttonText, buttonAction, isDisabled = false}) => {
  const [movieDescription, setMovieDescription] = useState("");

  const getMovieDescription = async () => {
    try {
      const data = await GetMovieByTitle(Title);

      if (data.Response === "True") {
        setMovieDescription(data.Plot);
      }
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    //Too slow for most uses
    // shouldGetDescription && getMovieDescription();
  },[movieDescription])

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;

    height: fit-content;
  `;

  const ContentTileContainer = styled(TileContainer)`
    padding-left: 1.5vmax;
    transition: background, color, box-shadow 0.3s linear;

    &:hover {
      box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%);
      transition: box-shadow 0.3s linear;
    }
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 76%;
    height: 85%;

    overflow: hidden;
  `;

  const TitleContainer = styled.div`
    display: block;
    font-size: 2vw;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    @media (max-width: 910px) {
      font-size: 4vw;
    }
  `;

  const TextContentContainer = styled.div`
    font-size: 1.1vw;

    @media (max-width: 910px) {
      display: none;
    }
    height: 80%;
  `;

  const ComponentContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 2vmax;
  `;

  const ImageContainer = styled.div`
    margin: auto;
    align-self: center;
    padding-left: 20px;
    padding-right: 20px;
    width: 170px;
    height: 250px;
  `;

  const ButtonContainer = styled.div`
    width: 60%;
    height: 100%;
  `;

  return (
    <ComponentContainer>
      <ContentTileContainer>
        <ContentContainer>
          <ImageContainer>
            <img src={Poster} width="100%" height="100%" alt="content image" />
          </ImageContainer>

          <TextContainer>
            <TitleContainer>{Title}</TitleContainer>
            <TextContentContainer>
              {`Release Year: ${Year}`}{" "}
            </TextContentContainer>
            <TextContentContainer>{movieDescription} </TextContentContainer>
            <ButtonContainer>
              <Button
                onClick={() => {
                  buttonAction(Title,Year, Poster);
                }}
                style={{ width: "100%", height: "100%" }}
                variant="contained"
                disabled={isDisabled}
              >
                {buttonText}
              </Button>
            </ButtonContainer>
          </TextContainer>
        </ContentContainer>
      </ContentTileContainer>
    </ComponentContainer>
  );
};

export default SearchResult;
