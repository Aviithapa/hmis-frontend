"use client";

import React, { forwardRef } from "react";

export type PatientData = {
  id?: number;
  first_name?: string;
  last_name?: string;
  age?: number;
  sex?: string;
  phone?: string;
  address?: string;
  doctor?: string;
  type?: string;
};

type Props = {
  patientData: PatientData;
};

const PrintPatientRegistration = forwardRef<HTMLDivElement, Props>(
  function PrintPatientRegistration({ patientData }, ref) {
    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return (
      <div style={{ display: "none" }}>
        <div ref={ref}>
          <div
            className="flex justify-center bg-white h-screen"
            style={{ color: "black" }}
          >
            <div className="text-left">
              <div className="text-3xl leading-tight">
                <span className="font-bold">{patientData?.doctor}</span>
                <br />
                <span className="text-lg">
                  Patient Id :{" "}
                  <span className="font-bold">{getRandomInt(1, 1000)}</span>
                </span>{" "}
                <br />
                <div className="text-2xl leading-tight mt-2">
                  Name :
                  <span className="font-bold">
                    {patientData?.first_name} {patientData?.last_name}
                  </span>{" "}
                  &nbsp; &nbsp; &nbsp;
                  <span>Type : {patientData?.type}</span>
                </div>
                <span className="text-lg"></span>
              </div>
              <div className="text-2xl leading-tight mt-2">
                Age/Sex : {patientData?.age} Y/{patientData?.sex}{" "}
                <span className="ml-7">{patientData?.phone}</span>
                <br />
                <span>Address : {patientData?.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PrintPatientRegistration;
