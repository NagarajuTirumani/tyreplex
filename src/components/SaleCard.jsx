import React from "react";

function SaleCard() {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 cursor-pointer card-hover">
      <div
        style={{ marginRight: "3px", marginBottom: "16px" }}
        className="row bg-white border rounded tyre_info"
      >
        <div className="col-6">
          <div className="col-md-6">
            <span>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-_Ti28v7DEQIQ87nwjmRXxgSnWOND78oGg&s"
                alt="item"
              />
            </span>
          </div>

          <div>
            <p>AMAZER 4G LIFE</p>
          </div>

          <div className="text-muted my-2 tyre_info_detail">
            <span>145/80 R12</span>
          </div>

          <div className="my-2">
            <span className="text-white px-1 py-1 rounded shop_info_rating">
              <i className="fa-solid fa-star text-warning text-white"></i>4
            </span>
            <span className="text-muted mx-2 tyre_info_detail">320 Reviews</span>
          </div>

          <div className="d-flex align-items-center">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span className="mx-2">3,135</span>
          </div>

          <div className="text-success my-1 tyre_info_detail">
            <span>offer Available</span>
          </div>
          <div className="my-2 tyre_info_detail">
            <span>Tube Type</span>
          </div>
        </div>

        <div className="col-6 px-0 d-flex flex-column justify-content-between">
          <div className="mark d-flex align-items-center">
            <i className="mx-1 fa-regular fa-circle-check text-success"></i>
            <span className="tyre_info_detail">5 Years Warranty</span>
          </div>

          <div className="tyre_info_img">
            <img
              src="https://cdn.tyreplex.net/uploads/images/tyre_model/original/apollo/amazer-4g-life/img_main.png?v=2385909&tr=w-178,q-78,q-60"
              alt="item"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SaleCard;
