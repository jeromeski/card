import React from "react";
import img from "../../assets/images/room-image-1.jpg";

const CardOne = ({ data }) => {
  const {
    id,
    title,
    address,
    imgUrl,
    bedrooms,
    baths,
    guests,
    featured,
    price
  } = data;
  return (
    <div className="item-wrap">
      <div className="media property-item">
        <div className="media-left">
          <div className="item-media item-media-thumb">
            <span className="label-wrap top-left">
              <span
                className={`label label-success ${
                  featured ? "label-featured" : ""
                }`}
              >
                {featured ? "Featured" : ""}
              </span>
            </span>
            <a href="#!" className="hover-effect">
              <img src={img} alt={title} />
            </a>
            <div className="item-media-price">
              <span className="item-price">
                <sup>$</sup>
                {price}
                <sub>/per night</sub>
              </span>
            </div>
          </div>
        </div>
        <div className="media-body item-body clearfix">
          <div className="item-title-head table-block">
            <div className="title-head-left">
              <h2 className="title">
                <a href="#!">Beautiful Cove</a>
              </h2>
              <address className="item-address">{address}</address>{" "}
            </div>
          </div>

          <ul className="item-amenities">
            <li>
              <i className="fa fa-bed"></i>{" "}
              <span className="total-beds">2</span>{" "}
              <span className="item-label">Bedrooms</span>
            </li>

            <li>
              <i className="fa fa-shower"></i>{" "}
              <span className="total-baths">1</span>{" "}
              <span className="item-label">Baths</span>
            </li>

            <li>
              <i className="fa fa-user"></i>{" "}
              <span className="total-guests">2</span>{" "}
              <span className="item-label">Guests</span>
            </li>

            <li className="item-type">Bed &amp; Breakfast</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
