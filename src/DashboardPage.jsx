import waspLogo from "./waspLogo.png";
import "./Dashboard.css";
import { getUserInfo, useQuery } from "wasp/client/operations";

export const DashboardPage = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery(getUserInfo, {
    userId: 1,
  });

  return (
    <div className="container">
      <main>
        {user && <UserInfo user={user} />}

        {isLoading && "Loading..."}
        {error && "Error: " + error}
      </main>
    </div>
  );
};

const UserInfo = ({ user }) => {
  if (!user) return <div>No user</div>;

  return <div>Hi {user.name}!</div>;
};
