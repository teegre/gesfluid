import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const InterventionTypes = (props) => {

  const [types, setTypes] = useState([]);
  useEffect(() => {
    ax.get('/intervention_types').then((response) => {
      setTypes(response.data);
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={(e) => {props.onChange(types[e.target.value])}}
        className="form-select form-select-sm"
        id="typeLabel"
      >
      <option defaultValue={null}>---</option>
      {
        types.map((type) => (
          <option value={type.id} key={type.id}>
            {type.name}
          </option>
        ))
      }
      </select>
      <label htmlFor="typeLabel" className="fw-bold">
        <i className="fas fa-screwdriver-wrench"></i> Nature de l'intervention
      </label>
    </div>
  )
}

export default InterventionTypes;