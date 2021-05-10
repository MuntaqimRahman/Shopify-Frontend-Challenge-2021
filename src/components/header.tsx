import { useContext } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import SearchContext from "../contexts/search";

const Header = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: #f8f8f8;
    box-shadow: 0px 3px 8px 0px rgba(62, 100, 146, 0.16);

    @media (min-width: 0px) and (max-width: 910px) {
      height: 50px;
      font-size: 13px;
    }

    @media (min-width: 910px) and (max-width: 1537px) {
      height: 60px;
      font-size: 16px;
    }

    @media (min-width: 1537px) {
      height: 80px;
      font-size: 22px;
    }
  `;

  return (
    <HeaderContainer>
      <TextField
        autoFocus
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        variant="outlined"
      ></TextField>
    </HeaderContainer>
  );
};

export default Header;
