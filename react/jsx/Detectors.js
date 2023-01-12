import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Detectors = (props) => {
  const url = "http://localhost:8000/api/detectors"

  const [detectors, setDetectors] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setDetectors(response.data["hydra:member"]);
    })
  }, [])

  return (
    <select onChange={props.onDetectorChange} className="form-select">
    <option defaultValue={null}>Sélectionner un détecteur de fuites</option>
    {
      detectors.map((detector) => (
        <option value={detector.id} key={detector.id}>
          {detector.name}
        </option>
      ))
    }
    </select>
  )
}

export default Detectors;
