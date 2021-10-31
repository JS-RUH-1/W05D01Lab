import React, { useContext } from "react";
import { setContext } from "./Header";
function Body() {
  const arr = useContext(setContext);

  return (
    <div>
      <setContext.Provider>
        <h1>{arr[0]}</h1>
        <img width="20%" src={arr[1]} />
      </setContext.Provider>
    </div>
  );
}

export default Body;
