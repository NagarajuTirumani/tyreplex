import React from "react";

function ReviewContainer(props) {
  const { reviewText, userImage, userName } = props.review;
  return (
    <div className="col-md-4 col-10 user_reviews_info">
      <div className="border rounded py-3">
        <div className="d-flex align-items-center p-2">
          <img width="30" alt="user" height="30" src={userImage} />
          <span className="mx-2">{userName}</span>
        </div>
        <p className="text-muted px-2 user_reviews_details">{reviewText}</p>
      </div>
    </div>
  );
}

export default ReviewContainer;
