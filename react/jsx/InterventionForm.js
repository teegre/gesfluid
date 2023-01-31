import React from "react";
import { useState } from "react";
import User from "./User";
import Detectors from "./Detectors";
import DetectorControlDate from "./DetectorControlDate"
import Equipments from "./Equipment";
import InterventionTypes from "./InterventionTypes";
import OtherType from "./OtherType";
import Leakage from "./Leakage";
import Containers from "./Containers";
import EquipmentDetails from "./EquipmentDetails";
import FluidHandling from "./FluidHandling";
import Wastes from "./Wastes";
import FluidDestination from "./FluidDestination";
import Remarks from "./Remarks";

import ax from "./Axios";

const InterventionForm = () => {

  // Current date
  const date = new Date();
  date.setDate(date.getDate());
  const now = date.toLocaleDateString("fr-CA");
  
  // States
  const [interventionDate, setInterventionDate] = useState(now);
  const [equipment, setEquipment] = useState(null);
  const [type, setType] = useState(null);
  const [otherType, setOtherType] = useState("");
  const [detector, setDetector] = useState(null);
  const [detectorControlDate, setDetectorControlDate] = useState(null);
  const [leakLocations, setLeakLocations] = useState([]);
  const [leakFixed, setLeakFixed] = useState([]);
  const [fluidQuantities, setFluidQuantities] = useState({
    'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''
  });
  const [container, setContainer] = useState(null);
  const [fluidDestination, setFluidDestination] = useState("");
  const [remarks, setRemarks] = useState("");

  // Events
  
  const onInterventionDateChange = (e) => {
    setInterventionDate(e.target.value);
  }

  const onEquipmentChange = (e) => {
    handleReset();
    setEquipment(e);
  }

  const onTypeChange = (e) => {
    setType(e);
  }

  const onOtherTypeChange = (e) => {
    setOtherType(e.target.value);
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

  const postLeaks = (interventionID) => {

    let leaksIDs = [];

    for (let i = 0;  i < leakLocations.length;  i++) {
      let leak = {
        "location": leakLocations[i],
        "fixed": leakFixed[i],
        "intervention": "/api/interventions/" + interventionID,
      }
      console.log('Leak #' + (i+1), leak);
      // POST leaks
      ax.post('/leakages',
        leak
      )
      .then((response) => {
        console.log(response);
        leaksIDs.push(response.data.id);
      })
      .catch((error) => {
        console.log('ERROR', error);
      });
    }
    return leaksIDs;
  }

  const patchIntervention = (interventionID, leaksIDs) => {
    ax.patch('/interventions/' + interventionID,
    {
      "leakage": leaksIDs,
    })
    .then((response) => {
      console.log('PATCH RESPONSE', response);
      return true;
    })
    .catch((error) => {
      console.log('PATCH ERROR', error);
      return false;
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let intervention = {
      "date": interventionDate,
      "virginFluidQuantity": fluidQuantities.A,
      "recycledFluidQuantity": fluidQuantities.B,
      "regeneratedFluidQuantity": fluidQuantities.C,
      "forProcessingFluidQuantity": fluidQuantities.D,
      "bsffNumber": fluidQuantities.BSFF,
      "reusableFluidQuantity": fluidQuantities.E,
      "collectedFluidDestination": fluidDestination,
      "remarks": remarks,
      "interventionType": "/api/intervention_types/" + type.id,
      "otherInterventionType": otherType,
      "equipment": "/api/equipment/" + equipment.id,
      "container": container?"/api/containers/" + container.id:null,
      "detector": detector?"/api/detectors/" + detector.id:null,
      "user": "/api/users/" + window.user,
      "pdfPath": "",
    };

    console.log('json:', intervention);

    // POST intervention
    ax.post('/interventions',
      intervention
    )
    .then((response) => {
      console.log('intervention response:', response);
      if (leakLocations.length > 0) {
        // POST leaks
        let interventionID = response.data.id;
        let leaksIDs = postLeaks(interventionID);
        console.log('leaks ids', leaksIDs);
        if (leaksIDs.length > 0) {
          if (!patchIntervention(interventionID, leaksIDs)) {
            console.log('PATCH: something went wrong...');
            return;
          }
        }
      }
      handleReset();
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
    
  }

  const handleReset = () => {
    // setInterventionDate(now);
    setEquipment(null);
    setType(null);
    setOtherType("");
    setDetector(null);
    setDetectorControlDate(null);
    setLeakLocations([]);
    setLeakFixed([]);
    setFluidQuantities({ 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''});
    setContainer(null);
    setFluidDestination("");
    setRemarks("");
  }

  const mustInstall = () => {
    return fluidQuantities.E > 0;
  }

  return (
    <div className="section">
      <div className="section-center">
        <div className="container">
          <User data={window.user} />
          <form onSubmit={handleSubmit}>
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
                <InterventionTypes onChange={onTypeChange} data={equipment.id} />
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
                { 
                  (mustInstall() || fluidQuantities.D > 0) &&
                    <Containers
                      data={equipment.fluid}
                      onChange={onContainerChange}
                    />
                }

                { fluidQuantities.D > 0 &&
                  <Wastes data={equipment.fluid.fluidType}/>
                }
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
                <button className="btn btn-sm btn-danger" type="submit" disabled={!type || !equipment}>
                  Enregistrer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterventionForm;
