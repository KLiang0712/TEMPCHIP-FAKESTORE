/* Source: https://github.com/idrisibrahimerten/react-tailwind-ecommerce-website-project/blob/master/src/pages/PaymentScreen.js */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const [address, setAddress] = useState('');
  const [payMethod, setPayMethod] = useState('');
  const [payInfo, SetPayInfo] = useState('');
  const [cardNum, setCardNum] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPayMethod(event.target.value);
  };

  const handlePaymentDetailsChange = (event) => {
    SetPayInfo(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNum(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    setCvv(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation and processing
    if (!address || !payMethod || !payInfo) {
      alert('Please fill in all required fields');
      return;
    }

    // Calculate the total price based on your logic
    const totalPrice = calculateTotalPrice();

    // Redirect to the payment page with the necessary data
    navigate('/payment', {
      state: {
        address,
        payMethod,
        payInfo,
        cardNum,
        expDate,
        cvv,
        totalPrice,
      },
    });
  };

  const calculateTotalPrice = () => {
    // Calculate the total price based on your logic
    // You can access the cart items or any other relevant data here
    // For simplicity, let's assume the total price is $100
    return 100;
  };

  const renderCreditCardForm = () => {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-4">Enter Credit Card Details</h2>
        <input
          type="text"
          className="w-full rounded-lg p-2 mb-4"
          placeholder="Card Number"
          value={cardNum}
          onChange={handleCardNumberChange}
        />
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            className="w-1/2 rounded-lg p-2"
            placeholder="Expiry Date"
            value={expDate}
            onChange={handleExpiryDateChange}
          />
          <input
            type="text"
            className="w-1/2 rounded-lg p-2"
            placeholder="CVV"
            value={cvv}
            onChange={handleCvvChange}
          />
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <input
            type="text"
            className="w-full rounded-lg p-2 mb-4"
            placeholder="Enter address"
            value={address}
            onChange={handleAddressChange}
          />

          <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="creditCard"
                checked={payMethod === 'creditCard'}
                onChange={handlePaymentMethodChange}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Credit Card</span>
            </label>
            {payMethod === 'creditCard' && renderCreditCardForm()}
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="crypto"
                checked={payMethod === 'crypto'}
                onChange={handlePaymentMethodChange}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Crypto Payment</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="cashOnDelivery"
                checked={payMethod === 'cashOnDelivery'}
                onChange={handlePaymentMethodChange}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Cash on Delivery</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="bankTransfer"
                checked={payMethod === 'bankTransfer'}
                onChange={handlePaymentMethodChange}
                className="form-radio h-4 w-4 text-primary"
              />
              <span className="ml-2">Bank Transfer</span>
            </label>
          </div>

          <h2 className="text-xl font-semibold mb-4">Enter Payment Details</h2>
          <textarea
            className="w-full rounded-lg p-2 mb-4"
            placeholder="Enter payment details"
            value={payInfo}
            onChange={handlePaymentDetailsChange}
          ></textarea>

          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <div>
            <p>Address: {address}</p>
            <p>Payment Method: {payMethod}</p>
            {payMethod === 'creditCard' && (
              <>
                <p>Card Number: {cardNum}</p>
                <p>Expiry Date: {expDate}</p>
                <p>CVV: {cvv}</p>
              </>
            )}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Total Price</h2>
            <p className="text-lg font-semibold">${calculateTotalPrice().toFixed(2)}</p>
          </div>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors duration-300 mt-6"
            disabled={!address || !payMethod || !payInfo}
          >
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;