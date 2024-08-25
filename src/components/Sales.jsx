import React from "react";
import SaleCard from "./SaleCard";

function Sales() {
  return (
    <div className="p-3 mt-3">
      <div className="fw-bold">Tyres sold by this Dealer</div>
      <div className="row my-1 d-flex justify-content-end">
        <div className="col-md-6 col-sm-8 col d-flex align-items-center justify-content-end">
          <div className="col-md-3 col-sm-4 col">
            <button
              type="button"
              className="btn btn-outline-dark px-3 dropdown-toggle filter_by d-flex justify-content-between align-items-center"
              data-bs-toggle="dropdown"
            >
              Filter By
            </button>
          </div>
          <div className="col-md-3 col-sm-4 col mx-1">
            <button
              type="button"
              className="btn px-3 dropdown-toggle btn-outline-dark filter_by d-flex justify-content-between align-items-center"
            >
              Most Popular
            </button>
          </div>
          <div className="col-md-3 col-sm-4 d-flex justify-content-evenly align-items-center">
            <a href="/"> Advanced </a>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        </div>
      </div>
      <div className="row">
        {Array(8)
          .fill("sale")
          .map((_, index) => (
            <SaleCard key={index} />
          ))}
      </div>
      <div className="text-center my-2">
        <button
          type="button"
          className="btn btn btn-outline-secondary dropdown-toggle"
        >
          View More
        </button>
      </div>
    </div>
  );
}

export default Sales;
