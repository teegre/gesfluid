import React from "react";
import { useState } from "react";

const Wastes = (props) => {
  const [wasteType, setWasteType] = useState(null);

  return (
    <div className="container">
      <div className="my-2 bg-secondary p-2 rounded">
        <div className="text-light">
          <i className="fas fa-dumpster"></i> Dénomination ADR/RID
        </div>
      </div>
    </div>
  )
}

export default Wastes;
