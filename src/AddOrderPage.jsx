import { useState } from "react";
import "./AddOrder.css";

import { addOrder } from "wasp/client/operations";
import { PinModal } from "./PinModal";

export const AddOrderPage = () => {
  const [actionInputs, setActionInputs] = useState({});
  const [showPinModal, setShowPinModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const target = event.target;
      const ndc = target.ndc.value;
      const quantity = target.quantity.value;
      const entryId = target.entryId.value;
      target.reset();

      setActionInputs({ ndc, quantity, entryId, userId: 1 });
      setShowPinModal(true);
    } catch (err) {
      window.alert("Error: " + err.message);
    }
  };

  return (
    <div className="container">
      <main>
        {showPinModal && <PinModal action={addOrder} inputs={actionInputs} />}
        {!showPinModal && (
          <form onSubmit={handleSubmit}>
            <label>NDC</label>
            <input name="ndc" type="text" defaultValue="" autoFocus />
            <label>Quantity</label>
            <input name="quantity" type="text" defaultValue="" />
            <label>Invoice #</label>
            <input name="entryId" type="text" defaultValue="" />
            <input type="submit" value="Add Order" />
          </form>
        )}
      </main>
    </div>
  );
};
