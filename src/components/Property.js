import React from "react";
import propertyImage from "D:/internship/reunion/rent-property-app/src/images/propertyImage.jpg";

const Property = ({ info }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={propertyImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-state">{info.state}</p>
          <span className="card-house-size">{info.sq_ft} sq. ft</span>
          <span className="card-beds">, {info.bedrooms} bedrooms</span>
          <h6 className="card-price">Rent: ₹{info.price}/month</h6>
        </div>
      </div>
    </>
  );
};

export default Property;
