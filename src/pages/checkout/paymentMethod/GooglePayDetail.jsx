import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function GooglePayDetail() {
  const navigate = useNavigate();

  const handleProceed = () => {
    alert('Redirecting to PayPal...');
    navigate('/');
  };

  return (
    <div className="min-h-screen p-4 bg-white">
      <h2 className="text-xl font-semibold mb-4">PayPal</h2>
      <p className="mb-4 text-gray-600">You will be redirected to PayPal to complete the payment.</p>
      <button onClick={handleProceed} className="w-full bg-[#6A4E42] text-white py-3 rounded-full font-medium">Continue to GooglePay</button>
    </div>
  );
}