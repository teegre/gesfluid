import React from "react";
import { useState } from "react";
import Detectors from "./Detectors";
import Equipments from "./Equipments";
import InterventionTypes from "./InterventionTypes";
import Containers from "./Containers";
import EquipmentDetails from "./EquipmentDetails";

const InterventionForm = () => {

  const [type, setType] = useState(null);
  const [equipment, setEquipment] = useState(null);
  const [detector, setDetector] = useState(null);
  const [container, setContainer] = useState(null);

  const onTypeChange = (e) => {
    setType(e);
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

  if (equipment) {
    console.log(equipment, type, detector, container);
  }

  return (
    <div className="section">
      <div className="section-center">
        <div className="container">
          <form onSubmit={handleSubmit}>
            {/* {equipment?.name} */}
            <Equipments onChange={onEquipmentChange} />
            { equipment &&
                <EquipmentDetails data={equipment} />
            }
            <InterventionTypes onChange={onTypeChange} />
            <Detectors onChange={onDetectorChange} />
            { equipment &&
              <Containers
                data={equipment.fluid}
                onChange={onContainerChange}
              />
            }
          </form>
        </div>
      </div>
    </div>
  );
}

export default InterventionForm;
