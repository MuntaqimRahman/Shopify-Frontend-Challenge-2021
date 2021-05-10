import {FC} from "react";
import styled from "styled-components";
import {TileContainer} from "../styling/tile";

interface SearchResultProps {
    Title?: string,
    Year?: string,
    Poster?: string,
}


const SearchResult:FC<SearchResultProps> = ({Title, Year, Poster}) => {

    const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    align-items: center;

    height: 13vw;
  `;

  const ContentTileContainer = styled(TileContainer)`
    cursor: pointer;
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

    margin-left: 3vw;
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
      width: 24%;
      height: 85%;
  `;

    return(
        <ComponentContainer>
          <ContentTileContainer>
            <ContentContainer>
                <ImageContainer>
                  <img
                    src={Poster}
                    width="100%"
                    height="100%"
                    alt="content image"
                  />
                </ImageContainer>
             
              <TextContainer>
                <TitleContainer>{Title}</TitleContainer>
                <TextContentContainer>{} </TextContentContainer>
              </TextContainer>
            </ContentContainer>
          </ContentTileContainer>
      </ComponentContainer>
    )
}

export default SearchResult;