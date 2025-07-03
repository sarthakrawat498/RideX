import React, { useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../Components/LiveTracking";
import black_logo from '../assets/Logo_RideX_black.png';
const Riding = () => {
  const location = useLocation();
  const { ride } = location.state || {};
  const { socket } = useContext(SocketContext);
  const navigate = useNavigate();
  socket.on("ride-ended", () => {
    navigate("/home");
  });
  return (
    <div className="h-screen ">
        
      <Link
        to="/home"
        className="fixed  h-10 w-10 right-2 top-2 bg-white flex items-center justify-center rounded-full"
      >
        <i className="text-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className="h-1/2 ">
        <LiveTracking />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398986/assets/90/34c200-ce29-49f1-bf35-e9d250e8217a/original/UberX.png"
            alt=""
          />
          <div className="text-right">
            <h2 className="text-lg font-medium capitalize">
              {ride?.captain.fullname.firstname}
            </h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">
              {ride?.captain.vehicle.plate}
            </h4>
            <p className="font-sm text-gray-600 ">Maruti Suzuki Wagonr</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex item-center gap-5 p-3 border-gray-500 border-b-2">
              <i className="text-lg ri-map-pin-2-fill"></i>
              <div>
                <h3 className="text-lg font-medium">
                  {ride?.destination?.split(",")[0] || ""}
                </h3>
                <p className="text-sm -mt-1 text-gray-600">
                  {ride?.destination?.split(",").slice(1).join(", ") || ""}
                </p>
              </div>
            </div>
            <div className="flex item-center gap-5 p-3  ">
              <i className="ri-currency-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
                <p className="text-sm -mt-1 text-gray-600">Cash </p>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full  bg-green-700 text-white font-semibold p-2 rounded-lg">
          Pay Now
        </button>
      </div>
    </div>
  );
};
export default Riding;
