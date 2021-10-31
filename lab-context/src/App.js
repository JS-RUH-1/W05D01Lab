import "./App.css";
import React, { useState } from "react";
import Header from "./Component/Header";
import Language from "./language-context";

function App() {
  const [lang, setlang] = useState();
  console.log(lang);

  function change(lan) {
    setlang(lan);
  }

  return (
    <div className="App">
      <button
        onClick={() => {
          change("English");
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          change("Arabic");
        }}
      >
        Arabic
      </button>
      <button
        onClick={() => {
          change("France");
        }}
      >
        France
      </button>
      <Language.Provider value={{ Language: lang }}>
        <Header />
      </Language.Provider>
    </div>
  );
}

export default App;
