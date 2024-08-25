import React from "react";

function PaymentCard() {
  return (
    <div>
      <div className="my-2">
        <p className="text-muted">
          Home / Tyre Dealers / Tyre Dealers Ghaziabad / SHREE HEMKUNT TYRES AND
          SERVICES
        </p>
      </div>
      <div className="p-3 border shadow p-3 mb-5 rounded">
        <p className="fw-bold">Payment Mode</p>
        <div className="row">
          <ul className="row col-md-7 col-12 mx-1">
            <li className="col-md-6 col-6 mb-2 px-0 d-flex align-items-center">
              <div className="col-sm-1 text-center">
                <i className="fa-solid fa-check text-success"></i>
              </div>
              <div className="col-sm-11 px-2">
                <p className="mb-0 fw-semibold">Deposit to Account</p>
              </div>
            </li>
            <li className="col-md-6 col-6 mb-2 px-0 d-flex align-items-center">
              <div className="col-sm-1 text-center">
                <i className="fa-solid fa-check text-success"></i>
              </div>
              <div className="col-sm-11 px-2">
                <p className="fw-semibold mb-0">Net Banking</p>
              </div>
            </li>
            <li className="col-md-6 col-6 mb-2 px-0 d-flex align-items-center">
              <div className="col-sm-1 text-center">
                <i className="fa-solid fa-check text-success"></i>
              </div>
              <div className="col-sm-11 px-2">
                <p className="fw-semibold mb-0">Credit Card/Debit Card</p>
              </div>
            </li>
            <li className="col-md-6 col-6 mb-2 px-0 d-flex align-items-center">
              <div className="col-sm-1 text-center">
                <i className="fa-solid fa-check text-success"></i>
              </div>
              <div className="col-sm-11 px-2">
                <p className="fw-semibold mb-0">UPI</p>
              </div>
            </li>
            <li className="col-md-6 col-6 mb-2 px-0 d-flex align-items-center">
              <div className="col-sm-1 text-center">
                <i className="fa-solid fa-check text-success"></i>
              </div>
              <div className="col-sm-11 px-2">
                <p className="fw-semibold mb-0">
                  Wallets(PayTM/PhonePe/Amazo netc.)
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;
