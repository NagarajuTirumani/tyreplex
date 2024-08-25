import React from "react";

function DealCompany(props) {
  const { url, company } = props.company;
  return (
    <div className="col-md-2 col-4 p-3 m-2 text-center border shadow p-3 mb-4 bg-white rounded deals_in_company card-hover">
      <div className="deals_in_img">
        <img src={url} className="img-fluid" alt="deal-company" />
      </div>
      <span>{company}</span>
    </div>
  );
}

export default DealCompany;
