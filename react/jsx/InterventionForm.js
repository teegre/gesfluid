import React from "react";
import { useState } from "react";
import Detectors from "./Detectors";
import DetectorControlDate from "./DetectorControlDate"
import Equipments from "./Equipments";
import InterventionTypes from "./InterventionTypes";
import OtherType from "./OtherType";
import Containers from "./Containers";
import EquipmentDetails from "./EquipmentDetails";

const InterventionForm = () => {

  // States
  const [interventionDate, setInterventionDate] = useState(null);
  const [type, setType] = useState("");
  const [otherType, setOtherType] = useState(null);
  const [equipment, setEquipment] = useState(null);
  const [detector, setDetector] = useState(null);
  const [detectorControlDate, setDetectorControlDate] = useState(null);
  const [container, setContainer] = useState(null);

  // Current date
  const date = new Date();
  date.setDate(date.getDate());
  const now = date.toLocaleDateString("fr-CA");
  
  // Events
  const onInterventionDateChange = (e) => {
    setInterventionDate(e.target.value);
  }

  const onTypeChange = (e) => {
    setType(e);
  }

  const onOtherTypeChange = (e) => {
    setOtherType(e.target.value);
  }

  const onEquipmentChange = (e) => {
    setEquipment(e);
  }

  const onDetectorChange = (e) => {
    setDetector(e);
  }

  const onContainerChange = (e) => {
    setContainer(e);
  }

  const handleSubmit = (e) => {
    alert("The form has been submitted!");
    e.preventDefault;
  }

  const handleReset = () => {
    setInterventionDate(null);
    setType("");
    setOtherType(null);
    setEquipment(null);
    setDetector(null);
    setDetectorControlDate(null);
    setContainer(null);
  }

  return (
    <div className="section">
      <div className="section-center">
        <div className="container">
          <form onSubmit={handleSubmit}>
            {/* {equipment?.name} */}
            <div className="form-floating m-2">
              <input
                type="date"
                id="interventionDate"
                className="form-control form-control-sm"
                defaultValue={now}
                onChange={onInterventionDateChange}
              />
              <label htmlFor="interventionDate" className="small fw-bold">
                <i className="fas fa-calendar-days"></i> Date de l'intervention
              </label>
            </div>
            <Equipments onChange={onEquipmentChange} />
            { equipment &&
                <EquipmentDetails data={equipment} />
            }
            <InterventionTypes onChange={onTypeChange} />
            { type && type.id === 8  &&
                <OtherType onChange={onOtherTypeChange} />
            }
            <Detectors onChange={onDetectorChange} />
            { detector &&
              <DetectorControlDate data={detector} />
            }
            { equipment &&
              <Containers
                data={equipment.fluid}
                onChange={onContainerChange}
              />
            }
            <div className="d-flex d-flex-row align-items-center justify-content-between m-2">
              <div>
                <button className="btn btn-sm btn-warning" type="reset" onClick={handleReset}>Annuler</button>
              </div>
              <div>
                <button className="btn btn-sm btn-danger" type="submit">Enregistrer</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterventionForm;
