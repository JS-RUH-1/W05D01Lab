import React, { createContext, useState } from "react";
import Body from "./Body";

export const langContext = createContext();

function Header() {
  const [value, setValue] = useState([
    "Hello world",
    "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  ]);

  const handelClick = (n) => {
    switch (n) {
      case 1:
        setValue([
          "Hello world",
          "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9uZG9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        ]);
        break;
      case 2:
        setValue([
          "السلام عليكم",
          "https://static.dw.com/image/55670301_303.jpg",
        ]);
        break;
      case 3:
        setValue([
          "こんにちは世界",
          "https://media.istockphoto.com/photos/aerial-view-of-tokyo-cityscape-with-fuji-mountain-in-japan-picture-id1131743616?k=20&m=1131743616&s=612x612&w=0&h=5IzvPM791pd7-TFIB16zl1-CHgcqOBFLbQ9U1d6cUw8=",
        ]);
        break;

      default:
        console.log("hw");
    }
  };

  return (
    <div style={{ padding: 60 }}>
      <langContext.Provider value={value}>
        <button style={{ margin: 5 }} onClick={() => handelClick(1)}>
          {" "}
          English
        </button>
        <button style={{ margin: 5 }} onClick={() => handelClick(2)}>
          {" "}
          Arabic
        </button>
        <button style={{ margin: 5 }} onClick={() => handelClick(3)}>
          {" "}
          Japanese
        </button>

        <Body />
      </langContext.Provider>
    </div>
  );
}

export default Header;
