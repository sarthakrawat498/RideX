import React from "react";
import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import axios from "axios";
const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const submitHandler = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/rides/start-ride`,
      {
        params: {
          rideId: props.ride._id,
          otp: otp.trim(),
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      props.setConfirmRidePopUpPanel(false);
      props.setRidePopUpPanel(false);
      navigate("/captain-riding", { state: { ride: props.ride } });
    }
  } catch (error) {
    console.error("OTP validation failed:", error);
    
    if (error.response?.data?.errors) {
      alert(error.response.data.errors[0].msg); // express-validator message
    } else if (error.response?.data?.message) {
      alert(error.response.data.message);       // Service error like "Invalid OTP"
    } else {
      alert("Something went wrong. Please try again.");
    }
  }
};

  return (
    <div>
      <h5
        className="p-1 text-center w-[93%]  absolute top-0"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm Ride Details </h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mb-5 ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-12  rounded-full object-cover w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6xzTOIF3KmlJrKk0ILZ9uv4nXOxIiQll3Q&s"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">
            {props.ride?.user.fullname.firstname}
          </h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full ">
          <div className="flex item-center gap-5 p-3 border-gray-500 border-b-2">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {props.ride?.pickup?.split(",")[0] || ""}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.pickup?.split(",").slice(1).join(", ") || ""}
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3 border-gray-500 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">
                {props.ride?.destination?.split(",")[0] || ""}
              </h3>
              <p className="text-sm -mt-1 text-gray-600">
                {props.ride?.destination?.split(",").slice(1).join(", ") || ""}
              </p>
            </div>
          </div>
          <div className="flex item-center gap-5 p-3  ">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash </p>
            </div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <form onSubmit={submitHandler}>
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              placeholder="Enter OTP"
              className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3 mb-3"
            />
            <button className="w-full mt-1 text-lg flex justify-center bg-green-700 text-white font-semibold p-3 rounded-lg">
              Confirm
            </button>
            <button
              onClick={() => {
                props.setConfirmRidePopUpPanel(false);
                props.setRidePopUpPanel(false);
              }}
              className="w-full mt-2 bg-red-500 text-lg text-white font-semibold p-3 rounded-lg"
            >
              Cancel Ride
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ConfirmRidePopUp;
