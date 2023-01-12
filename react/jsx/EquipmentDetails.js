import React from "react";
import { useEffect, useState } from "react";

const EquipmentDetails = (props) => {

  return (
    <div className="row g-3 m-2">
      <label className="col-auto small fw-bold" htmlFor="equipmentName">
        Identification
      </label>
      <input
        type="text"
        readOnly
        className="col-auto form-control form-control-sm"
        id="equipmentName"
        value={props.data.name}
      />
    </div>
  )
}

export default EquipmentDetails;
