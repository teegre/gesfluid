import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const Detectors = (props) => {

  const [detectors, setDetectors] = useState([]);
  useEffect(() => {
    ax.get("/detectors").then((response) => {
      setDetectors(response.data);
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={props.onChange}
        className="form-select form-select-sm"
        id="detectorLabel"
      >
      <option defaultValue={null}>Sélectionner un détecteur de fuites</option>
      {
        detectors.map((detector) => (
          <option value={detector.id} key={detector.id}>
            {detector.name}
          </option>
        ))
      }
      </select>
      <label htmlFor="detectorLabel">
        <i className="fas fa-compass"></i> Détecteur de fuites
      </label>
    </div>
  )
}

export default Detectors;
