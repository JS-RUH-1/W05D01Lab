import React, { useContext } from "react";
import Language from "../language-context";
import Body from "./Body";

export default function Header() {
  const value = useContext(Language);
  console.log(value.Language);

  return (
    <div>
      {(function () {
        if (value.Language === "English")
          return (
            <div>
              <h1> hello world!</h1>
            </div>
          );
        else if (value.Language === "Arabic")
          return (
            <div>
              <h1>السلام عليكم</h1>
            </div>
          );
        else
          return (
            <div>
              <h1>Bonjour Mond</h1>
            </div>
          );
      })()}
      <Body />
    </div>
  );
}
