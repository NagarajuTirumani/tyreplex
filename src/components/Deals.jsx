import React from "react";
import DealCompany from "./DealCompany";

function Deals() {
  const dealingCompanies = [
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZOUTNjCtQkjbOy_kzAsV-0jBVeZCkOb7bw&s",
      company: "CEAT",
    },
    {
      id: 2,
      url: "https://1000logos.net/wp-content/uploads/2022/12/MRF-Logo.jpg",
      company: "MRF",
    },
    {
      id: 3,
      url: "https://1000logos.net/wp-content/uploads/2018/05/Goodyear-Logo.png",
      company: "GoodYear",
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-_Ti28v7DEQIQ87nwjmRXxgSnWOND78oGg&s",
      company: "Apollo",
    },
    {
      id: 5,
      url: "https://jktyre.com/images/new/JKTyreIndustries.jpg",
      company: "JK Tyre",
    },
    {
      id: 6,
      url: "https://www.shutterstock.com/image-vector/bridgestone-logo-sign-icon-emblem-600nw-2286811601.jpg",
      company: "Bridgeston",
    },
    {
      id: 7,
      url: "https://1000logos.net/wp-content/uploads/2021/04/Pirelli-logo.png",
      company: "Pirelli",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-rmjuyKmBePjyxATUU2nnPj1yz1_DAHZlLw&s",
      company: "Michelin",
    },
  ];
  return (
    <div className="bg-white p-3 border shadow p-3 mt-3 rounded">
      <div className="m-2">
        <span className="fw-bold">Deals In</span>
      </div>

      <div className="d-flex user_reviews">
        {dealingCompanies.map((company) => (
          <DealCompany company={company} key={company.id} />
        ))}
      </div>
    </div>
  );
}

export default Deals;
