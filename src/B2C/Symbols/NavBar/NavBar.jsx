import React from "react";
import { MdFlight, MdHotel, MdDirectionsBus, MdCreditCard, MdTrain, MdBeachAccess, MdSecurity, MdReceipt, MdInsertChart, MdDirectionsCar, MdFlightTakeoff, MdDirectionsBoat, MdGroup} from "react-icons/md";

// Style Import
import "./navbarstyle.css";

const NavBar = () => {
  return (
    <div className="navbar-wrapper-spt">
      <div className="navbar-background-spt">

        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdFlight size='2.5rem' style={{transform: "rotate(45deg)"}}/>
          </div>
          <div className="icon-text-spt">
              <p>Flight</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdHotel size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Hotels</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdDirectionsBus size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Bus</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdCreditCard size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Visa</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdTrain size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Train</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdBeachAccess size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Holiday</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdSecurity size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Insurance</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdReceipt size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>SOTO</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdInsertChart size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>GST</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdDirectionsCar size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Car</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdFlightTakeoff size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Transfers</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdDirectionsBoat size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Cruise</p>
            </div>
        </div>
        
        <div className="navbar-icon-wrapper-spt">
          <div className="navbar-icon-spt">
            <MdGroup size='2.5rem'/>
          </div>
          <div className="icon-text-spt">
              <p>Group</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
