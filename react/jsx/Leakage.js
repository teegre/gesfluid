import React from "react";
import { useState } from "react";

const Leak = (props) => {

  const onLeakChange = (e) => {
    console.log("child changed", e);
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
  // Leaks state structure:
  // [ {
  //     component: <Leak />,
  //     location: string,
  //     fixed: boolean
  //   },
  //   ...
  // ]
  const [leaks, setLeaks] = useState([]);

  const updateParent = () => {
    let parentState = [];
    for (let index = 0; index < leaks.length; index++) {
      parentState.push([leaks[index]["location"], leaks[index]["fixed"]]);
    }
    props.onChange(parentState);
  }

  const addLeak = () => {
    console.log("adding");
    let index = leaks.length;
    setLeaks([
      ...leaks,
      {
        component: <Leak data={index} onChange={onLeakChange} />,
        location: "",
        fixed: false,
      }
    ]);
  }

  const removeLeak = (e) => {
    console.log("removing");
    let index = e.target.id - 20;
    let leaksCopy = [...leaks];
    leaksCopy.splice(index, 1);
    setLeaks(leaksCopy);
    updateParent();
  }

  const onLeakChange = (e) => {
    console.log("changing");
    let index = e.target.id;
    console.log(index);
    console.log(leaks);
    let leaksCopy = [...leaks];
    leaksCopy[index]["location"] = e.target.value;
    setLeaks(leaksCopy);
    updateParent();
  }

  const onLeakFixed = (e) => {
    console.log("fixing");
    let index = e.target.id - 10;
    let leaksCopy = [...leaks];
    leaksCopy[index]["fixed"] = e.target.checked;
    setLeaks(leaksCopy);
    updateParent();
  }

  console.log(leaks);

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
            <div key={i} className="input-group m-2 d-flex d-flex-row align-items-center justify-content-even">
              {leak["component"]}
              <input type="checkbox" className="btn-check" id={10+i} autoComplete="off" onClick={onLeakFixed} />
              <label htmlFor={10+i} className="btn btn-outline-secondary border border-0 rounded"><i className="fas fa-wrench"></i></label>
              <button
                type="button"
                id={20+i}
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
