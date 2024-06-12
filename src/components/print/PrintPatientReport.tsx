"use client";

import { Card, List, Tag } from "antd";
import React, { forwardRef } from "react";
import LabTestTable from "../lab/LabTable";

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

const PrintPatientReportRegistration = forwardRef<HTMLDivElement, Props>(
  function PrintPatientReportRegistration({ patientData }, ref) {
    return (
      <div style={{ display: "none" }}>
        <div ref={ref} className="bg-white h-screen">
          <center>
            {" "}
            <h1
              style={{
                color: "black",
                fontSize: "32px",
                fontWeight: "800",
                paddingTop: "20px",
                textTransform: "uppercase",
              }}
            >
              Padma Hospital Pvt. Ltd
            </h1>
            <span
              style={{
                color: "black",
                fontSize: "16px",
                fontWeight: "800",
                paddingTop: "20px",
                textTransform: "uppercase",
              }}
            >
              ATTARIYA
            </span>
          </center>

          <center>
            {" "}
            <h1
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "800",
                paddingTop: "40px",
                textTransform: "uppercase",
              }}
            >
              Patient Report
            </h1>
          </center>

          <div className="bg-white ml-5 mr-5 mt-5 p-4">
            <Card>
              <div className=" p-4 grid grid-cols-1 md:grid-cols-3 gap-5">
                <List>
                  <List.Item>
                    <span className="font-semibold">Patient Id: </span>
                    <span>1234</span>
                  </List.Item>
                  <List.Item>
                    <span className="font-semibold">Name: </span>
                    <span>Abhishek Thapa</span>
                  </List.Item>
                  <List.Item>
                    <span className="font-semibold">Age / Gender: </span>
                    <span>25Y / M</span>
                  </List.Item>
                  <List.Item>
                    <span className="font-semibold">Prescription: </span>
                    <span>SELF / DOCTOR</span>
                  </List.Item>
                </List>
                <div />
                <List>
                  <List.Item>
                    <span className="font-semibold">Collection Date: </span>
                    <span>2024-01-03 7:50</span>
                  </List.Item>
                  <List.Item>
                    <span className="font-semibold">Reporting Date: </span>
                    <span>2024-01-03 7:50</span>
                  </List.Item>

                  <List.Item>
                    <span className="font-semibold">Reference: </span>
                    <span className="font-semibold">Dr. Ramesh</span>
                  </List.Item>
                </List>
              </div>
            </Card>
          </div>

          <div className="bg-white p-4 ml-5 mr-5 mt-5  shadow-lg">
            <LabTestTable />
          </div>
        </div>
      </div>
    );
  }
);

export default PrintPatientReportRegistration;
