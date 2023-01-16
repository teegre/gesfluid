import React from "react";

const OtherType = (props) => {
  
  return (
    <div className="m-2">
      <input
        type="text"
        className="form-control form-control-sm"
        id="otherInterventionType"
        placeholder="Veuillez préciser le type d'intervention..."
        onChange={props.onChange}
        autoFocus
      />
    </div>
  )
}

export default OtherType;
