import React from "react";
import ServiceCard from "./ServiceCard";

function ServiceComponent() {
  const services = [
    {
      id: 1,
      service: "Wheel Balancing",
      url: "https://cdn.tyreplex.net/images/wheel-alignment-bal.png?tr=w-100",
    },
    {
      id: 2,
      service: "Wheel Alignment",
      url: "https://cdn.tyreplex.net/images/wheel-alignment.png?tr=w-100",
    },
  ];
  return (
    <div className="bg-white p-3 border shadow p-3 mt-3 rounded">
      <div className="m-2">
        <span className="fw-bold"> Service Offered by this Dealer</span>
      </div>

      <div className="d-flex user_reviews">
        {services.map((service) => (
          <ServiceCard details={service} key={service.id} />
        ))}
      </div>
    </div>
  );
}

export default ServiceComponent;
