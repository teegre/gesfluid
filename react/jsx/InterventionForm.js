import React from "react";
import { useState } from "react";
import Detectors from "./Detectors";
import DetectorControlDate from "./DetectorControlDate"
import Equipments from "./Equipments";
import InterventionTypes from "./InterventionTypes";
import OtherType from "./OtherType";
import Leakage from "./Leakage";
import Containers from "./Containers";
import EquipmentDetails from "./EquipmentDetails";
import FluidHandling from "./FluidHandling";
import FluidDestination from "./FluidDestination";
import Remarks from "./Remarks";

const InterventionForm = () => {

  // States
  const [interventionDate, setInterventionDate] = useState(null);
  const [type, setType] = useState("");
  const [otherType, setOtherType] = useState(null);
  const [equipment, setEquipment] = useState(null);
  const [detector, setDetector] = useState(null);
  const [detectorControlDate, setDetectorControlDate] = useState(null);
  const [leakLocations, setLeakLocations] = useState([]);
  const [leakFixed, setLeakFixed] = useState([]);
  const [fluidQuantities, setFluidQuantities] = useState({});
  const [container, setContainer] = useState(null);
  const [fluidDestination, setFluidDestination] = useState("");
  const [remarks, setRemarks] = useState("");

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

  const onLeakLocationChange = (e) => {
    setLeakLocations(e);
  }

  const onLeakFixedChange = (e) => {
    setLeakFixed(e);
  }

  const onFluidQuantitiesChange = (e) => {
    setFluidQuantities(e);
  }

  const onContainerChange = (e) => {
    setContainer(e);
  }

  const onFluidDestinationChange = (e) => {
    setFluidDestination(e.target.value);
  }

  const onRemarksChange = (e) => {
    setRemarks(e.target.value);
  }

  const handleSubmit = (e) => {
    alert("The form has been submitted! ");
    e.preventDefault;
  }

  const handleReset = () => {
    setInterventionDate(null);
    setType("");
    setOtherType(null);
    setEquipment(null);
    setDetector(null);
    setDetectorControlDate(null);
    setLeakLocations([]);
    setLeakFixed([]);
    setFluidQuantities({});
    setContainer(null);
    setFluidDestination("");
    setRemarks("");
  }

  const mustInstall = () => {
    return fluidQuantities['D']+fluidQuantities['E'] > 0;
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
              <label htmlFor="interventionDate" className="fw-bold">
                <i className="fas fa-calendar-days"></i> Date de l'intervention
              </label>
            </div>
            <Equipments onChange={onEquipmentChange} />
            { equipment &&
              <>
                <EquipmentDetails data={equipment} />
                <InterventionTypes onChange={onTypeChange} />
              </>
            }
            { type?.name === "Autre"  &&
                <OtherType onChange={onOtherTypeChange} />
            }
            { type && type.name.startsWith('Contrôle') && !equipment?.leakDetectionSystem &&
              <Detectors onChange={onDetectorChange} />
            }
            { detector &&
                <DetectorControlDate data={detector} />
            }
            { (detector || (equipment?.leakDetectionSystem && type && type.name.startsWith('Contrôle'))) &&
                <Leakage
                  onLocationChange={onLeakLocationChange}
                  onFixedChange={onLeakFixedChange}
                />
            }
            
            { equipment && type && !type.name.startsWith('Contrôle') &&
              <>
                <FluidHandling onChange={onFluidQuantitiesChange} />
                <Containers
                  data={equipment.fluid}
                  onChange={onContainerChange}
                />
              </>
            }

            { mustInstall() &&
                <FluidDestination onChange={onFluidDestinationChange} />
            }

            { equipment &&
              <Remarks onChange={onRemarksChange} />                
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
