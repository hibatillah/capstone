import React from "react";

const PaymentMethod = () => {
  return (
    <div>
      {/* Info */}
      <div className="border-2 rounded-lg bg-white px-10 flex flex-col gap-3 mt-10">
        <div className="grid grid-cols-[80px_1fr_auto] gap-y-4 items-center py-6">
          <p>Contact</p>
          <p>joe.spagnuolo@uxbly.com</p>
          <p className="text-right">Edit</p>
          <hr className="col-span-3" />
          <p>Ship to</p>
          <p>Via Firenze 23, 92023, Campobello di Licata AG, Italia</p>
          <p className="text-right">Edit</p>
          <hr className="col-span-3" />
          <p>Method</p>
          <p>Standard Shipping - FREE</p>
          <p className="text-right">Edit</p>
          <hr className="col-span-3" />
        </div>
      </div>
      {/* Payment Method */}
      <p className="py-4 text-xl font-bold">Payment Method</p>
      <div className="border-2">
        <div className="bg-[#c4e4d2] px-10 py-2 flex gap-5 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-wallet"
            viewBox="0 0 16 16"
          >
            <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
          </svg>
          <p>Credit Card</p>
        </div>
        <div className="flex flex-col gap-5 py-10">
          <div className="px-10">
            <input
              type="text"
              className="border-2 w-full h-full px-4 py-2"
              placeholder="Card Number"
            />
          </div>
          <div className="px-10">
            <input
              type="text"
              className="border-2 w-full h-full px-4 py-2"
              placeholder="Holder Name"
            />
          </div>
          <div className="grid grid-cols-2 gap-9 px-10 items-center">
            <div className="w-full h-full">
              <input
                type="text"
                className="border-2 w-full h-full px-4 py-2"
                placeholder="Expiration (MM/YY)"
              />
            </div>
            <div className="w-full h-full">
              <input
                type="text"
                className="border-2 w-full h-full px-4 py-2"
                placeholder="CVV"
              />
            </div>
          </div>
        </div>
      </div>
      {/* tax information */}
      <p className="py-4 text-xl font-bold">Tax Information</p>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="px-4 py-2 border-2"
          placeholder="VAT number  (optional)"
        />
        <input
          type="text"
          className="px-4 py-2 border-2"
          placeholder="PEC (optional)"
        />
      </div>
      {/* Billing Address */}
      <p className="py-4 text-xl font-bold">Billing Address</p>
      <div className="border-2 px-10 flex flex-col gap-4 py-5">
        <label htmlFor="1" className="flex gap-5">
          <input
            type="radio"
            name="bil"
            id="1"
            value="address1"
          />Same as the shipping address
        </label>
        <hr />
        <label htmlFor="1" className="flex gap-5">
          <input
            type="radio"
            name="bil"
            id="1"
            value="address1"
          />Use a different address for billing
        </label>
      </div>
      <div className="flex justify-between py-5 items-center">
        <p className="text-emerald-500 underline">Back to shopping</p>
        <button className="bg-buttonSecondary px-6 py-2 rounded-lg text-white">Pay Now</button>
      </div>
    </div>
  );
};

export default PaymentMethod;
