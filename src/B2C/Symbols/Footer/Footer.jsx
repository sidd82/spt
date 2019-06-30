import React from "react";
import "./footerstyle.css";

const Footer = () => {
  return (
    <div className="footer-wrapper-spt">
    <div className="footer-container-spt">
      <div className="footer-list-spt">
        <div className="list-title-spt">Our Products</div>
          <div className="list-item-spt">
            <a href="#">Home Deals</a>
            <a href="#">name your own price</a>
            <a href="#">Hotels</a>
            <a href="#">Cars</a>
            <a href="#">Flights</a>
            <a href="#">Packages</a>
            <a href="#">Cruises</a>
          </div>
      </div>
      
      <div className="footer-list-spt">
        <div className="list-title-spt">About SPT</div>
          <div className="list-item-spt">
              <a href="#">Cotact Us</a>
              <a href="#">Media Center</a>
              <a href="#">Investor Relations</a>
              <a href="#">Terms and Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Careers</a>
          </div>
      </div>
      
      <div className="footer-list-spt">
        <div className="list-title-spt">Partner with SPT</div>
          <div className="list-item-spt">
              <a href="#">Add Your Hotel</a>
              <a href="#">Priceline Partner Network</a>
              <a href="#">Advertise</a>
            </div>
      </div>
      
      <div className="footer-list-spt">
        <div className="list-title-spt">Connect with SPT</div>
          <div className="list-item-spt">
              <a href="#">SPT for iOS</a>
              <a href="#">SPT for Android</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">YouTube</a>
            </div>
      </div>
      </div>
      <div className="footer-bottom-spt">
        <div className="bottom-text-spt">savepertrip.com is  the world leader in online travel & related services.</div>
        <div className="footer-copyright-spt">All Rights Reserved @svaepertrip.com. Designed & Developed by CoreCelo</div>
      </div>
    </div>

   
  );
};

export default Footer;
