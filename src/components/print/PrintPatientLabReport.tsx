import React, { forwardRef } from "react";

interface Attribute {
  name: string;
  finding: string;
  unit: string;
  refernce: string;
}

interface Group {
  name: string;
  attributes: Attribute[];
}

interface TestResult {
  name: string;
  finding?: string;
  unit?: string;
  refernce?: string;
  method?: string;
  group?: Group[];
  attributes?: Attribute[];
}

interface ReportData {
  patient: {
    name: string;
    age: number;
    gender: string;
    patientID: string;
    barcodeID: string;
    referredBy: string;
    sampleType: string;
  };
  report: {
    orderID: string;
    registrationDate: string;
    collectionDate: string;
    sampleReceiveDate: string;
    reportStatus: string;
    reportDate: string;
  };
  testResults: TestResult[];
}

interface MedicalInvoiceProps {
  data: ReportData;
}

const PrintPatientLabReport = forwardRef<HTMLDivElement, MedicalInvoiceProps>(
  function PrintPatientLabBill({ data }, ref) {
    return (
      <div ref={ref} className="max-w-4xl mx-auto bg-white shadow-md p-8">
        <div className="flex justify-center items-center border-b pb-4 mb-4">
          <div className="text-center">
            <h2 className="text-xl font-bold">Padma Hospital Pvt. Lts</h2>
            <p>Attariya Kailali</p>
            <p>Kailali - 122 015</p>
            <p>
              <strong>Contact:</strong> 0124-4306767
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p>
              <strong>Name:</strong> {data.patient.name}
            </p>
            <p>
              <strong>Age/Gender:</strong> {data.patient.age}Y/
              {data.patient.gender}
            </p>
            <p>
              <strong>Patient ID:</strong> {data.patient.patientID}
            </p>
            <p>
              <strong>Barcode ID:</strong> {data.patient.barcodeID}
            </p>
            <p>
              <strong>Referred By:</strong> {data.patient.referredBy}
            </p>
            <p>
              <strong>Sample Type:</strong> {data.patient.sampleType}
            </p>
          </div>
          <div>
            <p>
              <strong>Order ID:</strong> {data.report.orderID}
            </p>
            <p>
              <strong>Registration Date:</strong> {data.report.registrationDate}
            </p>
            <p>
              <strong>Collection Date:</strong> {data.report.collectionDate}
            </p>
            <p>
              <strong>Sample Receive Date:</strong>{" "}
              {data.report.sampleReceiveDate}
            </p>
            <p>
              <strong>Report Status:</strong> {data.report.reportStatus}
            </p>
            <p>
              <strong>Report Date:</strong> {data.report.reportDate}
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold border-b pb-2 mb-2">
            HAEMATOLOGY
          </h3>
        </div>

        <table className="w-full text-sm border-collapse border mb-8">
          <thead>
            <tr>
              <th className="border p-2">Test Name</th>
              <th className="border p-2">Result</th>
              <th className="border p-2">Unit</th>
              <th className="border p-2">Bio Ref. Interval</th>
              <th className="border p-2">Method</th>
            </tr>
          </thead>
          <tbody>
            {data.testResults.map((test, index) => {
              if (test.group) {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td colSpan={5} className="border p-2 font-semibold">
                        {test.name}
                      </td>
                    </tr>
                    {test.group.map((group, index) => (
                      <React.Fragment key={index}>
                        <tr>
                          <td colSpan={5} className="border p-2 font-semibold">
                            {group.name}
                          </td>
                        </tr>
                        {group.attributes.map((attr, index) => (
                          <tr key={index}>
                            <td className="border p-2 pl-5">{attr.name}</td>
                            <td className="border p-2">{attr.finding}</td>
                            <td className="border p-2">{attr.unit}</td>
                            <td className="border p-2">{attr.refernce}</td>
                            <td className="border p-2"></td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                );
              } else if (test.attributes) {
                return (
                  <React.Fragment key={index}>
                    <tr>
                      <td colSpan={5} className="border p-2 font-semibold">
                        {test.name}
                      </td>
                    </tr>
                    {test.attributes.map((attr, index) => (
                      <tr key={index}>
                        <td className="border p-2 pl-5">{attr.name}</td>
                        <td className="border p-2">{attr.finding}</td>
                        <td className="border p-2">{attr.unit}</td>
                        <td className="border p-2">{attr.refernce}</td>
                        <td className="border p-2"></td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              } else {
                return (
                  <tr key={index}>
                    <td className="border p-2">{test.name}</td>
                    <td className="border p-2">{test.finding}</td>
                    <td className="border p-2">{test.unit}</td>
                    <td className="border p-2">{test.refernce}</td>
                    <td className="border p-2">{test.method}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>

        <p className="text-xs mb-4">
          Kindly correlate clinically. Results relate only to the sample
          received. Refer to conditions of reporting overleaf. Test Results
          marked BOLD indicates abnormal results i.e. higher or lower than
          normal & The test marked with (*) were outsourced to our partner lab.
          All lab results are subject to clinical interpretation by a qualified
          medical professional & This report is not subject to use for any
          medico-legal purpose.
        </p>

        <div className="flex justify-end">
          <p className="text-right">
            <strong>Dr. Rahul Goyal</strong>
            <br />
            MD (Pathology)
          </p>
        </div>
      </div>
    );
  }
);

export default PrintPatientLabReport;
