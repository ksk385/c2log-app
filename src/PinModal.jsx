import "./PinModal.css";

import { useHistory } from "react-router-dom";
import { authorizeUser } from "wasp/client/operations";

export const PinModal = ({ action, inputs }) => {
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const target = event.target;
      const pinCode = target.pin.value;
      target.reset();

      const authorized = await authorizeUser({ pinCode, userId: 1 });
      if (authorized) {
        action(inputs);
        history.push("/dashboard");
      }
    } catch (err) {
      window.alert("Error: " + err.message);
    }
  };

  return (
    <div className="container">
      <main>
        <form onSubmit={handleSubmit}>
          <label>PIN</label>
          <input name="pin" type="text" defaultValue="" autoFocus />
          <input type="submit" value="Add Order" />
        </form>
      </main>
    </div>
  );
};
