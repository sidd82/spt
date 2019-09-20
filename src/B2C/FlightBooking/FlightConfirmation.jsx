import React, { useEffect } from "react";

const FlightConfirmation = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  });

  // Handle method for Payment Gateway
  const paymentHandler = e => {
    e.preventDefault();

    let options = {
      key: "rzp_test_2g4ouZkn05v9CF",
      //   amount: +searchFlight.Fare.PublishedFare * 100,
      name: "Rahul",
      description: "flight",
      handler: res => {
        alert(res.razorpay_payment_id);
      },
      prefill: {
        name: "Kartish pitale",
        email: "pitale.kartish@gmail.com"
      },
      notes: {
        address: "Hello world"
      }
    };

    let rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <button onClick={paymentHandler}>Book</button>
    </div>
  );
};

export default FlightConfirmation;
