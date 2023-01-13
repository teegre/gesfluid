import React from "react";
import { useEffect, useState } from "react";

const EquipmentDetails = (props) => {

  return (
    <div className="d-flex flex-md-row flex-sm-col justify-content-between">
      <div className="form-floating m-2">
        <input
          type="text"
          readOnly
          className="form-control form-control-sm"
          id="equipmentName"
          value={props.data.name}
        />
        <label htmlFor="equipmentName">
          Identification
        </label>
      </div>
      <div className="form-floating m-2">
        <input
          type="text"
          readOnly
          className="form-control form-control-sm"
          id="fluidName"
          value={props.data.fluid.name}
        />
        <label htmlFor="fluidName">
          Dénomination du fluide
        </label>
      </div>
       <div className="form-floating m-2">
        <input
          type="text"
          readOnly
          className="form-control form-control-sm"
          id="fluidQuantity"
          value={props.data.weight.toFixed(2) + " kg"}
        />
        <label htmlFor="fluidQuantity">
          Charge totale
        </label>
      </div>
       <div className="form-floating m-2">
        <input
          type="text"
          readOnly
          className="form-control form-control-sm"
          id="fluidCO2"
          value={props.data.co2EqTonnage.toFixed(2) + " t.éq.CO2"} 
        />
        <label htmlFor="fluidCO2">
          Tonnage équivalent C0<sub>2</sub>
        </label>
      </div>
    </div>
  )
}

export default EquipmentDetails;
