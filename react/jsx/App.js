import React from "react";

import Users from "./Users"

const App = () => {
  console.log("app!");

  return (
    <React.StrictMode>
      <ul>
        <Users />
      </ul>
    </React.StrictMode>
  )
}

export default App;
