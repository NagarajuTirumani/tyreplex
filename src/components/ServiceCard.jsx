import React from "react";

function ServiceCard(props) {
  const { url, service } = props.details;
  return (
    <div className="col-md-3 col-6 p-3 m-2 text-center border shadow p-3 mb-4 bg-white rounded service_details card-hover">
      <div className="deals_in_img">
        <img src={url} className="img-fluid" alt="service" />
      </div>
      <p>{service}</p>
      <button type="button" className="btn btn-danger px-4">
        Book
      </button>
    </div>
  );
}

export default ServiceCard;
