import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Equipments = (props) => {
  const url = "http://localhost:8000/api/equipment";

  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => {
      setEquipments(response.data["hydra:member"]);
    })
  }, [])

  return (
    <select onChange={props.onEquipmentChange} className="form-select">
    <option defaultValue={null}>Sélectionner un équipement</option>
    {
      equipments.map((equipment) => (
        <option value={equipment.id} key={equipment.id}>
          {equipment.name}
        </option>
      ))
    }
    </select>
  )
}

export default Equipments;
