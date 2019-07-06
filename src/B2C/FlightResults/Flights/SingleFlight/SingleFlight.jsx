import React from "react";
import "./singleflightstyle.css";
import {
  MdCloudDownload,
  MdPictureAsPdf,
  MdAssessment,
  MdAccessTime
} from "react-icons/md";

const SingleFlight = ({ flight }) => {
  console.log(flight.Segments[0][0].Origin.DepTime);
  return (
    <div className="single-flight-wrapper-spt">
      {/* Airline Part */}
      <div className="single-flight-spt">
        <div className="airline-area-sf-spt">
          <p>{flight.Segments[0][0].Airline.AirlineName}</p>
        </div>

        <div className="airline-area-sf-spt airline-flex-sf-spt">
          <div className="airline-share-sf-spt">
            <MdCloudDownload color="#212121" />
          </div>
          <div className="airline-share-sf-spt">
            <MdPictureAsPdf color="#212121" />
          </div>
          <div className="airline-share-sf-spt">
            <MdAssessment color="#212121" />
          </div>
        </div>

        <div className="airline-area-sf-spt">
          <div className="refundable-sf-spt">
            <p>{flight.IsRefundable ? "Refundable" : "Nonrefundable"}</p>
          </div>
        </div>
        <div className="airline-area-sf-spt">
          <h6>More Details...</h6>
        </div>
      </div>

      {/* Departure Part */}
      <div className="single-flight-spt">
        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <MdAccessTime size="1.5rem" color="#212121" />
          </div>
          <div className="text-departure-sf-spt">
            <p>20, June</p>
          </div>
        </div>

        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <p>1</p>
          </div>
          <div className="text-departure-sf-spt">
            <p>2</p>
          </div>
        </div>

        <div className="departure-area-sf-spt">
          <div className="icon-departure-sf-spt">
            <p>1</p>
          </div>
          <div className="text-departure-sf-spt">
            <p>2</p>
          </div>
        </div>
      </div>

      {/* Icon Part */}
      <div className="single-flight-spt middle-big-single-spt">
        <div className="icon-area-sf-spt">
          <p>1</p>
        </div>
      </div>

      {/* Arrival Part */}
      <div className="single-flight-spt">
        <div className="arrival-area-sf-spt">
          <p>1</p>
        </div>
        <div className="arrival-area-sf-spt">
          <p>2</p>
        </div>
        <div className="arrival-area-sf-spt">
          <p>3</p>
        </div>
      </div>

      {/* Duration Part */}
      <div className="single-flight-spt">
        <div className="duration-area-sf-spt">
          <p>1</p>
        </div>
        <div className="duration-area-sf-spt">
          <p>2</p>
        </div>
        <div className="duration-area-sf-spt">
          <p>3</p>
        </div>
      </div>

      {/* Price Part */}
      <div className="single-flight-spt">
        <div className="price-area-sf-spt">
          <p>1</p>
        </div>
        <div className="price-area-sf-spt">
          <p>2</p>
        </div>
      </div>
    </div>
  );
};

export default SingleFlight;
