import React, { forwardRef } from "react";

type Props = {};

const PrintPatientRegistration = forwardRef<HTMLDivElement, Props>(
  function PrintPatientRegistration(props, ref) {
    const now = new Date();
    return (
      <div style={{ display: "none" }}>
        <div ref={ref}>
          <div
            className="flex justify-center bg-white h-screen "
            style={{ color: "black" }}
          >
            <div className="text-left">
              <div className="text-3xl leading-tight">
                {now.toLocaleDateString()} &nbsp;
                {now.toLocaleTimeString()} <br />
                <span className="font-bold">Dr Philip Shyam Ranjit</span>
                <br />
                <span className="text-lg">
                  Patient Id : <span className="font-bold">1230</span>
                </span>{" "}
                <br />
                <span className="text-lg">
                  Name : <span className="font-bold">Abhishek Thapa</span>
                </span>
              </div>
              <div className="text-2xl leading-tight mt-2">
                Age/Sex : 25 Y/M <span className="ml-7">9867739191</span>
                <br />
                <span className="">Address : Lalitpur Imadol</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default PrintPatientRegistration;
