import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const Containers = (props) => {
  
  const [containers, setContainers] = useState([]);
  useEffect(() => {
    ax.get('/containers').then((response) => {
      setContainers(response.data);
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={(e) => {props.onChange(containers[e.target.value])}}
        className="form-select form-select-sm"
        id="containerLabel"
      >
      <option defaultValue={null}>---</option>
      {
        containers.map((container) => (
          <option value={container.id} key={container.id}>
            {container.serialNumber}
          </option>
        ))
      }
      </select>
      <label htmlFor="containerLabel" className="fw-bold">
        <i className="fas fa-bottle-droplet"></i> Contenant
      </label>
    </div>
  )
}

export default Containers;
