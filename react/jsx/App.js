import React from "react";
import { useState } from "react";

import Users from "./Users"
import InterventionTypes from "./InterventionTypes";
import Equipments from "./Equipments";

const App = () => {
  // intervention object
  let intervention = {
    "type": null,
    "equipment": null,
    "container": null,
    "detector": null,
    "user": null,
    "date": null,
  };

  const [type, setType] = useState(null);
  const [equipment, setEquipment] = useState(null);

  const onTypeChange = (e) => {
    setType(e.target.value)
    console.log("Type", data, e.target.value);
  }

  const onEquipmentChange = (e) => {
    setEquipment(e.target.value)
    console.log("Equipment", data, e.target.value);
  }


  return (
    <React.StrictMode>
      <Users />
      <InterventionTypes onChange={onTypeChange} />
      <Equipments onChange={onEquipmentChange} />
    </React.StrictMode>
  )
}

export default App;
