"use client";

import React, { forwardRef } from "react";

interface InvoiceItem {
  
medication_name: string;
  description: string;
  quantity: string;
  rate: string;
  amount: string;
}

interface InvoiceData {
  customer_name: string;
  address: string;
  sex?: string;
  gender?: string;
  age?: string;
  medication: InvoiceItem[];
  sub_total: string;
  amountInWords: string;
  termsAndConditions: string;
  discount?: string;
}

interface MedicalInvoiceProps {
  invoiceData?: InvoiceData;
}

const PrintPatientMedicineBill = forwardRef<HTMLDivElement, MedicalInvoiceProps>(
  function PrintPatientMedicineBill({ invoiceData }, ref) {
    return (
      <div style={{display:'none'}}>
        
      <div
        ref={ref}
        className="bg-white p-6 rounded-lg shadow-lg text-black relative overflow-hidden "
      >
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold text-green-700">TAX INVOICE</h1>
          <h2 className="text-xl font-bold text-green-900">MEDICAL INVOICE</h2>
          <p className="text-sm text-black">Address: Attariya, Kailali </p>
          <p className="text-sm text-black">Phone no: 98677XXXXX</p>
        </header>

        <section className="mb-8 text-black">
          <div className="flex justify-between border-b-2 border-green-200 pb-2 mb-2">
            <h3 className="font-bold">Patient Details</h3>
            <h4>UUID: 102040e</h4>
          </div>
          <div className="grid  gap-4 text-sm">
            <div>
              <span className="font-bold">Name:</span>
              <span>{invoiceData?.customer_name}</span>
            </div>
            <div>
              <span className="font-bold">Address:</span>
              <span>{invoiceData?.address}</span>
            </div>
            <div>
              <span className="font-bold">Sex / Gender:</span>
              <span>{invoiceData?.sex} / {invoiceData?.gender}</span>
            </div>
            <div>
              <span className="font-bold">Age:</span>
              <span>{invoiceData?.age}</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <table className="w-full text-sm border-collapse border border-green-200">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-200 p-2">S.No</th>
                <th className="border border-green-200 p-2">Medicine Name</th>
                <th className="border border-green-200 p-2">Quantity</th>
                <th className="border border-green-200 p-2">RATE</th>
                <th className="border border-green-200 p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData?.medication?.map((item, index) => (
                <tr key={index}>
                  <td className="border border-green-200 p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-green-200 p-2">
                    {item.
medication_name} <br />{" "}
                    <span className="text-gray-500">{item.description}</span>
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.rate}
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="mb-8">
          <div className="flex justify-between items-center bg-green-700 text-white p-2">
            <span>Discount</span>
            <span>{invoiceData?.discount}</span>
          </div>
          <div className="flex justify-between items-center bg-green-700 text-white p-2">
            <span>Sub Total</span>
            <span>{invoiceData?.sub_total}</span>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2">
            <div className="border border-green-200 p-2 text-sm h-20">
              <h3 className="font-bold">
                Amounts in word:
                <span className="font-normal">
                  &nbsp; {invoiceData?.amountInWords}
                </span>
              </h3>
            </div>
            <div className="border border-green-200 p-2 mb-2 h-20 mt-2">
              <p>{invoiceData?.termsAndConditions}</p>
            </div>
          </div>
          <div className="  border border-green-200 p-2 h-40">
            <p>Seal & Signature</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
);

export default PrintPatientMedicineBill;
