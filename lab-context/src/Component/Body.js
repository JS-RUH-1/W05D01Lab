import React, { useContext } from "react";
import Language from "../language-context";

export default function Body() {
  const value = useContext(Language);

  return (
    <div>
      {(function () {
        if (value.Language === "English")
          return (
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1oGxw06hK8WbjiYckV_Qvugy7og3P5_12-A&usqp=CAU"
                alt="img"
              />
            </div>
          );
        else if (value.Language === "Arabic")
          return (
            <div>
              <img
                src="https://iamhuna.com/demo/wp-content/themes/huna/images/z-Riyadh.PNG"
                alt="img"
              />
            </div>
          );
        else
          return (
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ozkNEhdpanDVUhXztulCFIAG9POlasKs5w&usqp=CAU"
                alt="img"
              />
            </div>
          );
      })()}
    </div>
  );
}
