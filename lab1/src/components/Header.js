import React, { createContext, useState } from "react";
import Body from "../components/Body";
export const setContext = createContext();
function Header() {
  let [data, setData] = useState([
    "السلام عليكم",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
  ]);
  function checkLanguage(str) {
    switch (str) {
      case "english":
        setData([
          "Hello world",
          "https://www.magltk.com/wp-content/uploads/2018/06/%D8%B3%D8%A7%D8%B9%D8%A9-%D9%84%D9%86%D8%AF%D9%86.jpg",
        ]);
        break;
      case "arabic":
        setData([
          "السلام عليكم",
          "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
        ]);
        break;
      case "japanese":
        setData([
          "こんにちは",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbKHwk0P1l8KbRxSnx74oa-Tg1ql_i9iP6EIP0IupygtVPs1o6W_qzriG5fXtGqppTb8&usqp=CAU",
        ]);
        break;
    }
  }

  return (
    <setContext.Provider value={data}>
      <div style={{ padding: "5% 0 0 0" }}>
        <button
          style={{ margin: "0 1% 0 1%" }}
          onClick={() => checkLanguage("english")}
        >
          English
        </button>
        <button
          style={{ margin: "0 1% 0 1%" }}
          onClick={() => checkLanguage("arabic")}
        >
          Arabic
        </button>
        <button
          style={{ margin: "0 1% 0 1%" }}
          onClick={() => checkLanguage("japanese")}
        >
          Japanese
        </button>
      </div>
      <Body />
    </setContext.Provider>
  );
}

export default Header;
