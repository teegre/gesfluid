import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const InterventionTypes = (props) => {
  const url = "http://localhost:8000/api/intervention_types";

  const [types, setTypes] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setTypes(response.data["hydra:member"]);
    })
  }, [])

  return (
    <select onChange={props.onTypeChange} className="form-select">
    <option defaultValue={null}>Sélectionner un type d'intervention</option>
    {
      types.map((type) => (
        <option value={type.id} key={type.id}>
          {type.name}
        </option>
      ))
    }
    </select>
  )
}

export default InterventionTypes;
