import "./App.css";

import React, { useState } from "react";

import { data as store } from "./constants";
import uniq from "lodash/uniq";

function App() {
  const [selected, setSelected] = useState([]);
  const [data, setDate] = useState([]);

  const search = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*")

    var raw = JSON.stringify({
      ingredients: ["Золотая текила", "Спрайт"],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("http://localhost:3001/api/cocktails/search", requestOptions)
      .then((response) => response.text())
      // .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleChange = (e) => {
    setDate(
      store.filter(
        (st) => st.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      )
    );
  };

  return (
    <div className="App">
      <div>
        <input type="text" onChange={handleChange} />
      </div>

      {data &&
        data.map((button) => {
          return (
            <button
              className={`gradient-button ${
                selected.indexOf(button) !== -1 ? "selected" : ""
              }`}
              key={`${button}`}
              onClick={() => {
                if (selected.indexOf(button) === -1) {
                  setSelected(uniq([...selected, button]));
                } else {
                  setSelected(selected.filter((e) => e !== button));
                }
              }}
            >
              {button}
            </button>
          );
        })}

      <button onClick={search}>search</button>
    </div>
  );
}

export default App;
