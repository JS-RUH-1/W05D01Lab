import React, { useContext } from "react";
import { setContext } from "../App";
function Body() {
  const arr = useContext(setContext);

  return (
    <div>
      <setContext>
        <img width="20%" src={arr[1]} />
      </setContext>
    </div>
  );
}

export default Body;
