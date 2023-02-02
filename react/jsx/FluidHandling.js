import React from "react";
import { useState } from "react";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';

const FluidHandling = (props) => {

  const [fluidQuantities, setFluidQuantities] = useState({
    'A': 0, 'B': 0, 'C': 0, 'D': 0, 'E': 0, 'BSFF': ''
  });
  const [sumABC, setSumABC] = useState(0);
  const [sumDE, setSumDE] = useState(0);
  const [fluidLoading, setFluidLoading] = useState(false);
  const [fluidCollecting, setFluidCollecting] = useState(false);

  const onFluidAChange = (e) => {
    let A = Number(e.target.value);
    let fq = {
      ...fluidQuantities,
      A: A
    };
    setFluidQuantities(fq);
    let sum = fluidQuantities.A + fluidQuantities.B + fluidQuantities.C;
    if (!isNaN(sum)) {
      setSumABC(A+fluidQuantities.B+fluidQuantities.C);
      props.onChange(fq);
    }
  }

  const onFluidBChange = (e) => {
    let B = Number(e.target.value);
    let fq = {
      ...fluidQuantities,
      B: B
    };
    setFluidQuantities(fq);
    setSumABC(fluidQuantities['A']+B+fluidQuantities['C']);
    props.onChange(fq);
  }

  const onFluidCChange = (e) => {
    let C = Number(e.target.value);
    let fq = {
      ...fluidQuantities,
      C: C
    };
    setFluidQuantities(fq);
    setSumABC(fluidQuantities['A']+fluidQuantities['B']+C);
    props.onChange(fq);
  }

  const onFluidDChange = (e) => {
    let D = Number(e.target.value);
    let fq = {
      ...fluidQuantities,
      D: D
    };
    setFluidQuantities(fq);
    setSumDE(D+fluidQuantities['E']);
    props.onChange(fq);
  }

  const onFluidEChange = (e) => {
    let E = Number(e.target.value);
    let fq = {
      ...fluidQuantities,
      E: E
    };
    setFluidQuantities(fq);
    setSumDE(fluidQuantities['D']+E);
    props.onChange(fq);
  }

  const onBsffChange = (e) => {
    let fq = {
      ...fluidQuantities,
      BSFF: e.target.value
    };
    setFluidQuantities(fq);
    props.onChange(fq);
  }

  const onLoadingClick = (e) => {
    setFluidLoading(e.target.checked);
    if (!e.target.checked) {
      let fq = {
        ...fluidQuantities,
        A: 0,
        B: 0,
        C: 0,
      }
      setFluidQuantities(fq);
      props.onChange(fq);
    }
  }

  const onCollectingClick = (e) => {
    console.log('collec', e);
    setFluidCollecting(e.target.checked);
    if (!e.target.checked) {
      let fq = {
        ...fluidQuantities,
        D: 0,
        BSFF: '',
        E: 0,
      }
      setFluidQuantities(fq);
      props.onChange(fq);
    }
  }

  return (
    <div className="container">
      <div className="d-flex bg-secondary text-light rounded mx-auto p-2">
        <div className="me-auto">
          <i className="fas fa-droplet"></i> Manipulation du fluide frigorigène
        </div>
        <div>
          <input className="btn-check" type="checkbox" role="switch" id="loadingFluid" onClick={(e) => {onLoadingClick(e)}} />
          <label
            className="btn border-0 btn-outline-dark btn-sm text-white"
            htmlFor="loadingFluid"
            id="tt-load"
          >
            <i className="fas fa-turn-down"></i>
          </label>
          <Tooltip anchorId="tt-load" content="Chargement" />
        </div>
        <div>
          <input className="btn-check" type="checkbox" role="switch" id="collectingFluid" onClick={(e) => {onCollectingClick(e)}} />
          <label
            className="btn border-0 btn-outline-dark btn-sm text-white"
            htmlFor="collectingFluid"
            id="tt-collect"
          >
            <i className="fas fa-turn-up"></i>
          </label>
          <Tooltip anchorId="tt-collect" content="Récupération" />
        </div>
      </div>
      <div className="d-md-flex flex-md-row justify-content-between">
        <div className="col-md-6" hidden={!fluidLoading}>
          <div className="form-floating m-2">
            <input
              type="text"
              className="border border-0 form-control form-control-sm"
              id="totalLoadedFluidQuantity"
              disabled
              value={sumABC}
            />
            <label htmlFor="totalLoadedFluidQuantity" className="fw-bold text-danger">
              <i className="fas fa-turn-down"></i> Quantité totale chargée <sup>(A+B+C)</sup></label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="virginFluidQuantity"
              defaultValue="0"
              onChange={onFluidAChange}
              autoFocus
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
              onChange={onFluidBChange}
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
              onChange={onFluidCChange}
            />
            <label htmlFor="regeneratedFluidQuantity" className="fw-bold">
              <sup>(C)</sup> Dont fluide régénéré
            </label>
          </div>
        </div>
        <div className="col-md-6" hidden={!fluidCollecting}>
          <div className="form-floating m-2">
            <input
              type="text"
              className="border border-0 form-control form-control-sm"
              id="totalRetrievedFluidQuantity"
              disabled
              value={sumDE}
            />
            <label htmlFor="totalRetrievedFluidQuantity" className="fw-bold text-danger">
              <i className="fas fa-turn-up"></i> Quantité totale récupérée <sup>(D+E)</sup></label>
          </div>
          <div className="form-floating m-2">
            <input
              type="text"
              className="form-control form-control-sm"
              id="forProcessingFluidQuantity"
              defaultValue="0"
              autoFocus
              onChange={onFluidDChange}
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
              onChange={onBsffChange}
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
              onChange={onFluidEChange}
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
