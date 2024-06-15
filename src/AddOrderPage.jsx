import waspLogo from "./waspLogo.png";
import "./AddOrder.css";
import { getUserInfo, useQuery } from "wasp/client/operations";

export const AddOrderPage = () => {
  const {
    data: userInfo,
    isLoading,
    error,
  } = useQuery(getUserInfo, {
    userId: 1,
  });

  return (
    <div className="container">
      <main>
        Hello from AddOrderPage!
        {isLoading && "Loading..."}
        {error && "Error: " + error}
      </main>
    </div>
  );
};
