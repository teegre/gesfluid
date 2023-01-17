import React from "react";
import { useState } from "react";

const FluidHandling = (props) => {

  const [fluidQuantities, setFluidQuantities] = useState({
    'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''
  });
  const [sumABC, setSumABC] = useState(0);
  const [sumDE, setSumDE] = useState(0);

  const onFluidAChange = (e, props) => {
    let A = Number(e.target.value);
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'A': A}
    }));
    setSumABC(A+fluidQuantities['B']+fluidQuantities['C']);
    props.onChange(fluidQuantities);
  }

  const onFluidBChange = (e, props) => {
    let B = Number(e.target.value);
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'B': B}
    }));
    setSumABC(fluidQuantities['A']+B+fluidQuantities['C']);
    props.onChange(fluidQuantities);
  }

  const onFluidCChange = (e, props) => {
    let C = Number(e.target.value);
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'C': C}
    }));
    setSumABC(fluidQuantities['A']+fluidQuantities['B']+C);
    props.onChange(fluidQuantities);
  }

  const onFluidDChange = (e, props) => {
    let D = Number(e.target.value);
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'D': D}
    }));
    setSumDE(D+fluidQuantities['E']);
    props.onChange(fluidQuantities);
  }

  const onFluidEChange = (e, props) => {
    let E = Number(e.target.value);
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'E': E}
    }));
    setSumDE(fluidQuantities['D']+E);
    props.onChange(fluidQuantities);
  }

  const onBsffChange = (e, props) => {
    setFluidQuantities( fluidQuantities => ({
      ...fluidQuantities,
      ...{'BSFF': e.target.value}
    }));
    props.onChange(fluidQuantities);
  }

  return (
    <div className="container">
      <h6 className="text-align-center">
        <i className="fas fa-droplet"></i> Manipulation du fluide frigorigène
      </h6>
      <div className="d-md-flex flex-md-row justify-content-between">
        <div className="col-md-6">
          <div className="form-floating m-2">
            <input
              type="text"
              className="border border-0 form-control form-control-sm"
              id="totalLoadedFluidQuantity"
              disabled
              value={sumABC}
            />
            <label htmlFor="totalLoadedFluidQuantity" className="fw-bold text-danger">
              <i className="fas fa-down-long"></i> Quantité totale chargée <sup>(A+B+C)</sup></label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="virginFluidQuantity"
              defaultValue="0"
              onChange={(e) => {onFluidAChange(e, props)}}
            />
            <label htmlFor="virginFluidQuantity" className="fw-bold">
              <sup>(A)</sup> Dont fluide vierge
            </label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="recycledFluidQuantity"
              defaultValue="0"
              onChange={(e) => {onFluidBChange(e, props)}}
            />
            <label htmlFor="recycledFluidQuantity" className="fw-bold">
              <sup>(B)</sup> Dont fluide recyclé
            </label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="regeneratedFluidQuantity"
              defaultValue="0"
              onChange={(e) => {onFluidCChange(e, props)}}
            />
            <label htmlFor="regeneratedFluidQuantity" className="fw-bold">
              <sup>(C)</sup> Dont fluide régénéré
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating m-2">
            <input
              type="text"
              className="border border-0 form-control form-control-sm"
              id="totalRetrievedFluidQuantity"
              disabled
              value={sumDE}
            />
            <label htmlFor="totalRetrievedFluidQuantity" className="fw-bold text-danger">
              <i className="fas fa-up-long"></i> Quantité totale récupérée <sup>(D+E)</sup></label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="forProcessingFluidQuantity"
              defaultValue="0"
              onChange={(e) => {onFluidDChange(e, props)}}
            />
            <label htmlFor="forProcessingFluidQuantity" className="fw-bold">
              <sup>(D)</sup> Dont fluide destiné au traitement
            </label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="bsffNumber"
              onChange={(e) => {onBsffChange(e, props)}}
            />
            <label htmlFor="bsffNumber" className="fw-bold">
              Numéro du BSFF (si connu)
            </label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="reusableFluidQuantity"
              defaultValue="0"
              onChange={(e) => {onFluidEChange(e, props)}}
            />
            <label htmlFor="reusableFluidQuantity" className="fw-bold">
              <sup>(E)</sup> Dont fluide conservé pour réutilisation
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FluidHandling;
