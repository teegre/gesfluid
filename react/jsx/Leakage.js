import React from "react";
import { useState } from "react";

const Leak = (props) => {

  const onLeakChange = (e) => {
    props.onChange(e)
  }

  return (
    <>
      <span className="input-group-text border border-0 bg-secondary text-light rounded me-2">{props.data+1}</span>
      <input
        type="text"
        id={props.data}
        className="form-control form-control-sm border border-0 ml-2 me-2"
        onChange={onLeakChange}
        placeholder="Localisation de la fuite"
        autoFocus
      />
    </>
  )
}

const Leakage = (props) => {
  const [leaks, setLeaks] = useState([]);
  const [leakLocations, setLeakLocations] = useState([]);

  const addLeak = (e) => {
    setLeaks([...leaks, <Leak data={leaks.length} onChange={onLeakChange} />]);
  }

  const removeLeak = (e) => {
    let index = e.target.id;
    let leaksCopy = [...leaks];
    let leakLocationsCopy = [...leakLocations];
    leaksCopy.splice(index, 1);
    leakLocationsCopy.splice(index, 1);
    setLeaks(leaksCopy);
    setLeakLocations(leakLocationsCopy);
    props.onChange(leakLocationsCopy);
  }

  const onLeakChange = (e) => {
    let locations = [...leakLocations];
    locations[e.target.id] = e.target.value;
    setLeakLocations(locations);
    props.onChange(locations);
  }

  return (
    <div className="container">
      <div className="d-flex d-flex-row justify-content-between align-items-center my-2 bg-secondary p-2 rounded">
        <div className="text-light">
          <i className="fas fa-wind"></i> Fuites constatées lors du contrôle d'étanchéité
        </div>
  
        <button
          type="button"
          className="btn btn-sm btn-outline-light"
          onClick={addLeak}
          disabled={leaks.length === 3}
        >
          <i className="fas fa-plus"></i> Ajouter
        </button>
      </div>
      { leaks.length > 0 &&
        <fieldset className="m-2 border border-1 rounded">
        {
          leaks.map((leak, i) => (
            <div key={i} className="input-group m-2 d-flex d-flex-row align-items-center">
              {leaks[i]}
              <button
                type="button"
                id={i}
                className="btn-close me-3 rounded-circle"
                onClick={removeLeak}
                aria-label="Close"
                disabled={i+1 < leaks.length}
              >
              </button>
            </div>
          ))
        }
        </fieldset>
      }
    </div>
  )
}

export default Leakage;
