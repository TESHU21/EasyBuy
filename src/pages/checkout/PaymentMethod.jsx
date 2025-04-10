import React, { useState } from "react";

const PaymentMethod = ({setBillingData}) => {
  const [selectedMethod, setSelectedMethod] = useState("card1");

  const paymentMethods = [
    {
      id: "card1",
      type: "Visa",
      number: "XXXX XXXX XXXX 8908",
      expiry: "09/27",
      default: true,
    },
    {
      id: "card2",
      type: "Mastercard",
      number: "XXXX XXXX XXXX 7777",
      expiry: "01/24",
      default: false,
    },
    {
      id: "card3",
      type: "PayPal",
      number: "XXXX XXXX XXXX 6498",
      expiry: "12/23",
      default: false,
    },
  ];

  const handleSelect = (id) => {
    setSelectedMethod(id);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4 text-sm text-gray-500">
        Account &rarr; Payment methods
      </div>
      <h2 className="text-xl font-semibold mb-6">Choose your payment method</h2>
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className={`border rounded-lg p-4 flex items-center justify-between cursor-pointer ${
              selectedMethod === method.id
                ? "border-purple-500 shadow-md"
                : "border-gray-300"
            }`}
            onClick={() => handleSelect(method.id)}
          >
            <div>
              <div className="font-semibold text-gray-700">{method.type}</div>
              <div className="text-gray-500 text-sm">{method.number}</div>
              <div className="text-gray-500 text-sm">
                Expires {method.expiry}
              </div>
              {method.default && (
                <div className="text-purple-500 text-xs font-medium">
                  Default
                </div>
              )}
            </div>
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedMethod === method.id
                  ? "border-purple-500"
                  : "border-gray-300"
              }`}
            >
              {selectedMethod === method.id && (
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              )}
            </div>
          </div>
        ))}
        <div
          className="border border-dashed border-gray-300 rounded-lg p-4 text-gray-500 text-center cursor-pointer"
          onClick={() => alert("Add Payment Method")}
        >
          Add Payment Method
        </div>
      </div>
      <button
        className="mt-6 w-full py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600"
        onClick={() => alert(`Selected Payment Method: ${selectedMethod}`)}
      >
        Submit
      </button>
    </div>
  );
};

export default PaymentMethod;
