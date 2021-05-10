import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Homepage from "./pages/Homepage";

import {SearchContextProvider} from "./contexts/search";
import {NominationContextProvider} from "./contexts/nomination";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [nominations,setNominations, isComponentMounted] = useLocalStorage("nominations",[]);

  return (

    !isComponentMounted ? <div></div> :

    <>
      <SearchContextProvider value ={{searchQuery,setSearchQuery}}>
        <NominationContextProvider value={{nominations,setNominations}}>
        <Homepage/>

        </NominationContextProvider>
      </SearchContextProvider>
    </>
  );
}

export default App;
