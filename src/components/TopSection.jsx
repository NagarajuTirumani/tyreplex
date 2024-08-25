import React from "react";
import ReviewContainer from "./ReviewContainer";

function TopSection() {
  const ShopImages = [
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8ryfQqAWHDmAPXAuK5o1Sk81OiWbLXHHNRm8OTBLFZE41-3arlK-Q7aMXjXp106o8p8Dca6OTnSTynW6ykkg86zy1-j4JRkpXI=s1600-w300",
    "https://lh3.googleusercontent.com/places/AAcXr8o52JCZ4eDqDhBAQRIDHcYnN1kNMCKBI27KOEuPvQk0C546Zftc9kpHLdW6kmlnbf1gGd7fSGfpctnLspNCfEpye7Rrmwrp094=s1600-w300",
  ];

  const Reviews = [
    {
      id: 1,
      reviewText:
        "Best tyre shop in Indirapuram. Good dealing with customer. All types tyre available here. Price also responsible. Overall good experience",
      userImage:
        "https://lh3.googleusercontent.com/a/AATXAJxi1FTLTnIbF-wcCFLUqffCFFV07qiTPPBbLVaO=s128-c0x00000000-cc-rp-mo",
      userName: "Rohit Bhat",
    },
    {
      id: 2,
      reviewText:
        "Best shoppe in Indirapuram. Good customer service. After sale service amazing. Overall nice experience",
      userImage:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      userName: "Md Nasir",
    },
    {
      id: 3,
      reviewText:
        "Went for Tyre change . Ultimate service by shoppe boys. Owner behavior very cool. Guide as per ur budget. Highly recommend.",
      userImage:
        "https://lh3.googleusercontent.com/a/AATXAJwahszZQxSMoUOJ3FOQwAgtMOeWI7bFaQnSRl1a=s128-c0x00000000-cc-rp-mo",
      userName: "Pradeep Kumar",
    },
    {
      id: 4,
      reviewText:
        "Excellent service from start to finish. 100% satisfaction with the job, professionalism and overall service.We were delighted with your courteous , prompt and professional.",
      userImage:
        "https://lh3.googleusercontent.com/a-/AOh14GhHSizwMQ5QJNIXpB3wdFKkkIEzs8WwYdQUngn6uw=s128-c0x00000000-cc-rp-mo",
      userName: "Surjit Kumar",
    },
    {
      id: 5,
      reviewText:
        " Genuine and Authorized Tyre shop in indirapuram having latest manufactured stock. Well equipped workshop with professional staff.",
      userImage:
        "https://lh3.googleusercontent.com/a/AATXAJwZ5yHTyhlbUnanuJwLGdscP95OtAMhFGiAD8Bf=s128-c0x00000000-cc-rp-mo",
      userName: "Md Nasir",
    },
  ];

  return (
    <div className="bg-white p-3 border shadow mt-lg-2 rounded">
      <div className="row mt-2 tyre_info_shop_details">
        <div className="col-md-5">
          <div className="d-flex tyre_info_shop_name">
            <h5>SHREE HEMKUNT TYRES AND SERVICES</h5>
            <div className="mx-2 d-flex align-items-center tyre_info_verify">
              <i className="mx-1 fa-regular fa-circle-check text-success"></i>
              <span className="text-success">Verified</span>
            </div>
          </div>
          <div className="d-flex my-1 align-items-center tyre_info_detail">
            <span className="text-white px-1 rounded shop_info_rating">4.9</span>
            <div className="mx-2">
              {Array(5)
                .fill("name")
                .map((_, index) => {
                  return (
                    <i key={index} className="fa-solid fa-star text-warning"></i>
                  );
                })}
            </div>
            <span className="mx-2 text-decoration-underline">2278 Reviews</span>
            <input
              type="button"
              className="mx-2 border-dark bg-white rounded text-muted"
              value="Rate"
            />
          </div>
          <div className="d-flex flex-column my-3">
            <div className="row tyre_info_detail">
              <div className="col-1 text-center">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="col-11">
                PLOT NUMBER-09 GROUND FLOOR CISF CAMPUS ROAD, AHINSA KHAND-02
                INDIRAPURAM, Ghaziabad, Uttar Pradesh, 201014
              </div>
              <div className="col-1 text-center">
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="col-11 text-muted">
                Open - Monday to Sunday - 10:00AM to 8:00PM
              </div>
            </div>
            <div></div>
          </div>
          <div className="my-4">
            <button type="button" className="btn btn-outline-danger px-5">
              Get Directions
            </button>
          </div>
        </div>

        <div className="col-md-7 d-flex user_reviews">
          {ShopImages.map((image, index) => (
            <div className="col-md-5 m-1" key={index}>
              <img src={image} alt={`shop ${index}`} key={index} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="mb-1">2228 Google Reviews</div>
        <div className="d-flex user_reviews">
          {Reviews.map((review) => {
            return <ReviewContainer review={review} key={review.id} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default TopSection;
