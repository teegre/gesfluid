import React from "react";
import { useState } from "react";

import Users from "./Users"
import InterventionTypes from "./InterventionTypes";
import Equipments from "./Equipments";
import Detectors from "./Detectors";

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

  const [type, setType] = useState("");
  const [equipment, setEquipment] = useState("");
  const [detector, setDetector] = useState("");

  const onTypeChange = (e) => {
    setType(e.target.value)
    console.log("Type", data, e.target.value);
  }

  const onEquipmentChange = (e) => {
    setEquipment(e.target.value)
    console.log("Equipment", data, e.target.value);
  }

  const onDetectorChange = (e) => {
    setDetector(e.target.value)
    console.log("Detector", e.target.value);
  }


  return (
    <React.StrictMode>
      <Users />
      <InterventionTypes onChange={onTypeChange} />
      <Equipments onChange={onEquipmentChange} />
      <Detectors onChange={onDetectorChange} />
    </React.StrictMode>
  )
}

export default App;
