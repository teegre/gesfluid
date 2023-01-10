import React from "react";

import Users from "./Users"

const App = () => {
  console.log("app!");

  return (
    <React.StrictMode>
      <ul className="list-group list-group-flush">
        <Users />
      </ul>
    </React.StrictMode>
  )
}

export default App;
