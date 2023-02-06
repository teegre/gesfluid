import React from "react";
import { useState, useEffect } from "react";
import User from "./User";
import Detectors from "./Detectors";
import DetectorControlDate from "./DetectorControlDate"
import Equipment from "./Equipment";
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
  const [leakControl, setLeakControl] = useState(false);
  const [detector, setDetector] = useState(null);
  const [leakLocations, setLeakLocations] = useState([]);
  const [leakFixed, setLeakFixed] = useState([]);
  const [fluidQuantities, setFluidQuantities] = useState({
    'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''
  });
  const [container, setContainer] = useState(null);
  const [fluidDestination, setFluidDestination] = useState("");
  const [remarks, setRemarks] = useState("");
  const [pdfPath, setPdfPath] = useState("");
  const [leaksPosted, setLeaksPosted] = useState(false);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (leaksPosted) {
      window.open(pdfPath, '_blank');
      window.location.reload();
    }
  });

  // Events
  
  const onInterventionDateChange = (e) => {
    setInterventionDate(e.target.value);
  }

  const onEquipmentChange = (e) => {
    handleReset();
    setEquipment(e);
  }

  const onTypeChange = (e) => {
    if (!e)
      setLeakControl(false);
    else
     setLeakControl((e.id === 5 || e.id === 6));
    setType(e);
    setDetector(null);
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
    let sumABC = e.A + e.B + e.C;
    let sumDE = e.D + e.B;
    setFormError(isNaN(sumABC) || isNaN(sumDE));
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

  const onError = (errorState) => {
    setFormError(errorState);
  }

  const postLeaks = async (interventionID) => {
    // POST leaks one by one
    let count = leakLocations.length;
    for (let i = 0;  i < leakLocations.length;  i++) {
      let leak = {
        "num": i+1,
        "count": count,
        "location": leakLocations[i],
        "fixed": leakFixed[i],
        "intervention": "/api/interventions/" + interventionID,
      }

      await ax.post('/leakages',
        leak
      )
      .catch((error) => {
        console.log('ERROR leakage POST', error);
        return
      });
    }
    setLeaksPosted(true);
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

    // POST intervention
    ax.post('/interventions',
      intervention
    )
    .then((response) => {
      // POST leaks
      postLeaks(response.data.id);
      setPdfPath(response.data.pdfPath);
    })
    .catch((error) => {
      console.log('ERROR', error);
    });
  }

  const handleReset = () => {
    setEquipment(null);
    setType(null);
    setOtherType("");
    setLeakControl(false);
    setDetector(null);
    setLeakLocations([]);
    setLeakFixed([]);
    setFluidQuantities({ 'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''});
    setContainer(null);
    setFluidDestination("");
    setRemarks("");
    setPdfPath("");
    setLeaksPosted(false);
    setFormError(false);
  }

  // Collected fluid will be installed in another equipment
  const mustInstall = () => {
    return fluidQuantities.E > 0;
  }

  return (
    <div className="section">
      <div className="section-center">
        <div className="container">
          <User data={window.user} />
          <div>
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
            <Equipment onChange={onEquipmentChange} />
            { equipment &&
              <>
                <EquipmentDetails data={equipment} />
                <InterventionTypes onChange={onTypeChange} data={equipment.id} />
              </>
            }
            { type?.id === 8  &&
                <OtherType onChange={onOtherTypeChange} />
            }
            { type && leakControl && !equipment?.leakDetectionSystem &&
              <>
                <Detectors data={type.id} onChange={onDetectorChange} />
                { detector &&
                    <DetectorControlDate data={detector} />
                }
              </>
            }
            { leakControl &&
                <Leakage
                  data={type?.id}
                  onLocationChange={onLeakLocationChange}
                  onFixedChange={onLeakFixedChange}
                />
            }
            
            { equipment && type && !leakControl &&
              <>
                <FluidHandling onChange={onFluidQuantitiesChange} onError={onError} />
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
                <button
                  className="btn btn-sm btn-danger"
                  type="submit"
                  disabled={!type || !equipment || formError}
                  onClick={handleSubmit}
                >
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterventionForm;
