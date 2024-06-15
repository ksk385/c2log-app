import "./AddOrder.css";

import { addOrder } from "wasp/client/operations";

export const AddOrderPage = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const target = event.target;
      const ndc = target.ndc.value;
      const quantity = target.quantity.value;
      const entryId = target.entryId.value;
      target.reset();

      await addOrder({ ndc, quantity, entryId, userId: 1 });
    } catch (err) {
      window.alert("Error: " + err.message);
    }
  };

  return (
    <div className="container">
      <main>
        <form onSubmit={handleSubmit}>
          <label>NDC</label>
          <input name="ndc" type="text" defaultValue="" />
          <label>Quantity</label>
          <input name="quantity" type="text" defaultValue="" />
          <label>Invoice #</label>
          <input name="entryId" type="text" defaultValue="" />
          <input type="submit" value="Add Order" />
        </form>
      </main>
    </div>
  );
};
