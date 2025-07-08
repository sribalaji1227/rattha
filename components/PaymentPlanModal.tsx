// components/PaymentPlanModal.tsx
"use client";

import React from "react";

interface PaymentPlanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PaymentPlanModal: React.FC<PaymentPlanModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Sample table data
  const tableData = [
    { installment: "DEPOSIT", milestone: "Immediate", payment: "24" },
    { installment: "1ST INSTALLMENT", milestone: "Within 3 month(s) of Sale Date", payment: "1" },
    { installment: "2ND INSTALLMENT", milestone: "Within 4 month(s) of Sale Date", payment: "1" },
    { installment: "3RD INSTALLMENT", milestone: "Within 5 month(s) of Sale Date", payment: "1" },
    { installment: "4TH INSTALLMENT", milestone: "Within 6 month(s) of Sale Date", payment: "1" },
    { installment: "5TH INSTALLMENT", milestone: "Within 7 month(s) of Sale Date", payment: "10" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl px-[52px]">
        {/* Modal Header */}
        <div className="flex justify-between items-center  py-[32px]">
          <h3 className="text-2xl font-medium uppercase">PAYMENT PLAN</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-[60px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-[#107BC0]">
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-poppins">
                  installment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-poppins">
                  milestone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider font-poppins">
                  payment(%)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className={index % 2 !== 0 ? 'bg-[#EAF7FF]' : 'bg-white'}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.installment}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.milestone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {row.payment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanModal;