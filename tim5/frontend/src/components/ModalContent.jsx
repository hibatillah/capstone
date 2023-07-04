import React from "react";

const ModalContent = ({ modalForm, handleModal }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return modalForm === "request material" ? (
    <>
      <h2>Request Material Stock</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="material">Material</label>
          <select
            type="text"
            name="material"
            id="material"
            placeholder="Choose material"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Request amount"
            className="form"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="supplier">Supplier</label>
          <select
            type="text"
            name="supplier"
            id="supplier"
            placeholder="Choose supplier"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "add product" ? (
    <>
      <h2>Add Product Stock</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="product">Product</label>
          <select
            type="text"
            name="product"
            id="product"
            placeholder="Choose product"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Request amount"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : modalForm === "send material" ? (
    <>
      <h2>Send Material Stock</h2>
      <hr />
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label htmlFor="material">Material</label>
          <select
            type="text"
            name="material"
            id="material"
            placeholder="Choose material"
            className="form"
          >
            <option value="name">name</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Request amount"
            className="form"
          />
        </div>
        <div className="flex gap-3 justify-end">
          <button onClick={() => handleModal("")} className="btn btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    </>
  ) : null;
};

export default ModalContent;
