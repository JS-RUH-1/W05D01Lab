import React, { useContext } from "react";
import { setContext } from "../App";
function Header() {
  const arr = useContext(setContext);

  return (
    <div>
      <setContext>
        <h1>{arr[0]}</h1>
      </setContext>
    </div>
  );
}

export default Header;
