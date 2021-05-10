import styled from "styled-components";

const Banner = () => {
  const BannerContainer = styled.div`
    display: flex;
    background-color: #ff9d00;
    flex-direction: row;
    width: 100%;
    height: 50px;
  `;

  const TextContainer = styled.span`
    margin: auto;
    text-align: center;
   `;

  return (
    <BannerContainer>
      {" "}
      <TextContainer>
        You're Finished! 5 Nominations have been selected. If you'd like to
        change your selection, please remove a nomination you'd like to replace{" "}
      </TextContainer>
    </BannerContainer>
  );
};

export default Banner;
