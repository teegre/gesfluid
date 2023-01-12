import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const Equipments = (props) => {

  const [equipments, setEquipments] = useState([]);
  useEffect(() => {
    ax.get("/equipment").then((response) => {
      setEquipments(response.data)
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={(e) => {props.onChange(equipments[e.target.value])}}
        className="form-select form-select-sm"
        id="equipmentLabel"
      >
      <option defaultValue={null}>Sélectionner un équipement</option>
      {
        equipments.map((equipment, i) => (
          <option value={i} key={equipment.id}>
            {equipment.name}
          </option>
        ))
      }
      </select>
      <label htmlFor="equipmentLabel">
        <i className="fas fa-gears"></i> Equipement concerné
      </label>
    </div>
  )
}

export default Equipments;
