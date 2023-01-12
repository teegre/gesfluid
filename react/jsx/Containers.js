import React from "react";
import { useEffect, useState } from "react";
import ax from "./Axios";

const Containers = (props) => {
  const url = "http://localhost:8000/api/containers";
  
  const [containers, setContainers] = useState([]);
  useEffect(() => {
    ax.get(url).then((response) => {
      setContainers(response.data);
    })
  }, [])

  return (
    <div className="form-floating m-2">
      <select
        onChange={props.onChange}
        className="form-select form-select-sm"
        id="containerLabel"
      >
      <option defaultValue={null}>Sélectionner un contenant</option>
      {
        containers.map((container) => (
          <option value={container.id} key={container.id}>
            {container.serialNumber}
          </option>
        ))
      }
      </select>
      <label htmlFor="containerLabel">
        <i className="fas fa-bottle-droplet"></i> Contenant
      </label>
    </div>
  )
}

export default Containers;
