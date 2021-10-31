import "./App.css";
import React, { createContext, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
export const setContext = createContext();
function App() {
  let [data, setData] = useState([
    "السلام عليكم",
    "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
  ]);

  return (
    <div className="app">
      <button
        style={{ margin: "0 1% 0 1%" }}
        onClick={() =>
          setData([
            "Hello world",
            "https://www.magltk.com/wp-content/uploads/2018/06/%D8%B3%D8%A7%D8%B9%D8%A9-%D9%84%D9%86%D8%AF%D9%86.jpg",
          ])
        }
      >
        English
      </button>
      <button
        style={{ margin: "0 1% 0 1%" }}
        onClick={() =>
          setData([
            "السلام عليكم",
            "https://upload.wikimedia.org/wikipedia/commons/a/af/All_Gizah_Pyramids.jpg",
          ])
        }
      >
        Arabic
      </button>
      <button
        style={{ margin: "0 1% 0 1%" }}
        onClick={() =>
          setData([
            "こんにちは",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwbKHwk0P1l8KbRxSnx74oa-Tg1ql_i9iP6EIP0IupygtVPs1o6W_qzriG5fXtGqppTb8&usqp=CAU",
          ])
        }
      >
        Japanese
      </button>
      <setContext.Provider value={data}>
        <Header />
        <Body />
      </setContext.Provider>
    </div>
  );
}

export default App;
