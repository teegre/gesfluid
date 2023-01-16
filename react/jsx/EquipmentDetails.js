import React from "react";

const EquipmentDetails = (props) => {

  return (
    <div className="container mt-1 mb-1">
      <div className="d-md-flex flex-md-row justify-content-between">
        <div className="form-floating flex-xl-fill">
          <input
            type="text"
            readOnly
            className="border border-0 form-control form-control-sm"
            id="equipmentName"
            value={props.data.name}
          />
          <label htmlFor="equipmentName" className="small fw-bold text-success">
            <i className="fas fa-tag"></i> Identification
          </label>
        </div>
        <div className="form-floating flex-xl-fill">
          <input
            type="text"
            readOnly
            className="border border-0 form-control form-control-sm"
            id="fluidName"
            value={props.data.fluid.name}
          />
          <label htmlFor="fluidName" className="small fw-bold text-success">
            <i className="fas fa-droplet"></i> Dénomination du fluide
          </label>
        </div>
        <div className="form-floating flex-xl-fill">
          <input
            type="text"
            readOnly
            className="border border-0 form-control form-control-sm"
            id="fluidQuantity"
            value={props.data.weight.toFixed(2) + " kg"}
          />
          <label htmlFor="fluidQuantity" className="small fw-bold text-success">
            <i className="fas fa-weight-hanging"></i> Charge totale
          </label>
        </div>
         <div className="form-floating flex-xl-fill">
          <input
            type="text"
            readOnly
            className="border border-0 form-control form-control-sm"
            id="fluidCO2"
            value={props.data.co2EqTonnage.toFixed(2) + " t.éq.CO2"} 
          />
          <label htmlFor="fluidCO2" className="small fw-bold text-success">
            <i className="fas fa-cloud"></i> Tonnage équivalent C0<sub>2</sub>
          </label>
        </div>
      </div>
    </div>
  )
}

export default EquipmentDetails;
