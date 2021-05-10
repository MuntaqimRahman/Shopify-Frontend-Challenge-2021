import { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

import Homepage from "./pages/Homepage";

import {SearchContextProvider} from "./contexts/search";
import {NominationContextProvider, NominationObject} from "./contexts/nomination";

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [nominations,setNominations] = useLocalStorage<NominationObject[]>("nominations",[]);

  return (
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
