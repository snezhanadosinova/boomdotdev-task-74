import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // const [isNumber, setIsNumber] = useState(false);

  // const handleChange = (text, isNumber) => {
  //   const onlyNumbers = text.replace(/\D/g, "");
  //   setText(text);
  //   if (text === onlyNumbers) {
  //     // setText(text);
  //     setIsNumber(true);
  //   } else {
  //     // setText(text);
  //     setIsNumber(false);
  //   }
  //   return isNumber;
  // };

  const memoizedValue = useMemo(() => {
    return /^\d+$/.test(text);
  }, [text]);

  return (
    <div className="App">
      <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <span className="icon is-small is-right">
          <i className={"fas " + (memoizedValue ? "fa-check" : "fa-times")} />
        </span>
      </div>
    </div>
  );
}

export default App;
