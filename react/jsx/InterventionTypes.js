import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const InterventionTypes = (props) => {
  const url = "http://localhost:8000/api/intervention_types";

  const [types, setTypes] = useState([]);
  useEffect(() => {
    ax.get(url).then((response) => {
      setTypes(response.data);
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={props.onChange}
        className="form-select form-select-sm"
        id="typeLabel"
      >
      <option defaultValue={null}>Sélectionner un type d'intervention</option>
      {
        types.map((type) => (
          <option value={type.id} key={type.id}>
            {type.name}
          </option>
        ))
      }
      </select>
      <label htmlFor="typeLabel">
        <i className="fas fa-screwdriver-wrench"></i> Nature de l'intervention
      </label>
    </div>
  )
}

export default InterventionTypes;
