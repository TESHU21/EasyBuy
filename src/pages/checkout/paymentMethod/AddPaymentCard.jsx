import React, { useState } from 'react';
import { usePayment } from '@/context/paymentContext';

const AddPaymentCard = () => {
  const { setStep } = usePayment(); // Get step control from context
  const [form, setForm] = useState({
    name: '',
    number: '',
    expiry: '',
    cvv: ''
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(

    )
   

    // You can add validation or saving logic here
    console.log('Card Saved:', form);

    // Move to OrderItem step
    setStep(2);
  };

  return (
    <div className="flex justify-center p-4 bg-white ">
      <div className="max-w-md w-full shadow-md p-6 border rounded-lg">
        <h2 className="text-lg text-center font-semibold text-gray-700 mb-6">Add New Card</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Cardholder Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={form.number}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry Date (MM/YY)"
            value={form.expiry}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <input
            type="password"
            name="cvv"
            placeholder="CVV"
            value={form.cvv}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#6A4E42] text-white py-3 rounded-full font-semibold hover:bg-[#5a3d33] transition"
          >
            Save Card
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPaymentCard;
