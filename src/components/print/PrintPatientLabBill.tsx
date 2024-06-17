"use client";

import React, { forwardRef } from "react";

interface InvoiceItem {
  name: string;
  description: string;
  hsn: string;
  rate: string;
  mrp: string;
  tax: string;
  amount: string;
}

interface InvoiceData {
  address: string;
  phone: string;
  partyName: string;
  partyAddress: string;
  gstin: string;
  items: InvoiceItem[];
  subTotal: string;
  amountInWords: string;
  termsAndConditions: string;
}

interface MedicalInvoiceProps {
  invoiceData: InvoiceData;
}

const PrintPatientLabBill = forwardRef<HTMLDivElement, MedicalInvoiceProps>(
  function PrintPatientLabBill({ invoiceData }, ref) {
    return (
      <div
        ref={ref}
        className="bg-white p-6 rounded-lg shadow-lg text-black relative overflow-hidden  "
      >
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold text-green-700">TAX INVOICE</h1>
          <h2 className="text-xl font-bold text-green-900">MEDICAL INVOICE</h2>
          <p className="text-sm text-black">Address: {invoiceData.address}</p>
          <p className="text-sm text-black">Phone no: {invoiceData.phone}</p>
        </header>

        <section className="mb-8 text-black">
          <div className="flex justify-between border-b-2 border-green-200 pb-2 mb-2">
            <h3 className="font-bold">Patient Details</h3>
            <h4>UUID: 102040e</h4>
          </div>
          <div className="grid  gap-4 text-sm">
            <div>
              <span className="font-bold">Name:</span>
              <span>{invoiceData.partyName}</span>
            </div>
            <div>
              <span className="font-bold">Address:</span>
              <span>{invoiceData.partyAddress}</span>
            </div>
            <div>
              <span className="font-bold">Sex / Gender:</span>
              <span>{invoiceData.partyAddress}</span>
            </div>
            <div>
              <span className="font-bold">Age:</span>
              <span>{invoiceData.partyAddress}</span>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <table className="w-full text-sm border-collapse border border-green-200">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-200 p-2">S.No</th>
                <th className="border border-green-200 p-2">Items</th>
                <th className="border border-green-200 p-2">HSN</th>
                <th className="border border-green-200 p-2">RATE</th>
                <th className="border border-green-200 p-2">MRP</th>
                <th className="border border-green-200 p-2">TAX</th>
                <th className="border border-green-200 p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-green-200 p-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-green-200 p-2">
                    {item.name} <br />{" "}
                    <span className="text-gray-500">{item.description}</span>
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.hsn}
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.rate}
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.mrp}
                  </td>
                  <td className="border border-green-200 p-2 text-center">
                    {item.tax}
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
            <span>Sub Total</span>
            <span>{invoiceData.subTotal}</span>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-4 ">
          <div className="col-span-2">
            <div className="border border-green-200 p-2 text-sm h-20">
              <h3 className="font-bold">
                Amounts in word:
                <span className="font-normal">
                  &nbsp; {invoiceData.amountInWords}
                </span>
              </h3>
            </div>
            <div className="border border-green-200 p-2 mb-2 h-20 mt-2">
              <p>{invoiceData.termsAndConditions}</p>
            </div>
          </div>
          <div className="  border border-green-200 p-2 h-40">
            <p>Seal & Signature</p>
          </div>
        </div>

        <div className="page-two"></div>
        <section className="mb-8 bg-white">
          &nbsp;
          <table className="w-full text-sm border-collapse border border-green-200">
            <thead>
              <tr className="bg-green-700 text-white">
                <th className="border border-green-200 p-2">Name</th>
                <th className="border border-green-200 p-2">Outcome</th>
              </tr>
            </thead>
            <tbody>
              {invoiceData.items.map((item, index) => (
                <tr key={index}>
                  <td className="border border-green-200 p-2 text-center">
                    {item.name}
                  </td>
                  <td className="border border-green-200 p-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    );
  }
);

export default PrintPatientLabBill;
