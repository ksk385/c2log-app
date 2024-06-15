import waspLogo from "./waspLogo.png";
import "./Dashboard.css";
import { getUserInfo, useQuery } from "wasp/client/operations";

export const DashboardPage = () => {
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
        {userInfo && <UserInfo userInfo={userInfo} />}

        {isLoading && "Loading..."}
        {error && "Error: " + error}
      </main>
    </div>
  );
};

const UserInfo = ({ userInfo }) => {
  if (!userInfo) return <div>No user</div>;

  return (
    <>
      <div>{userInfo.pharmacy.name}</div>
      <div>Hi {userInfo.name}!</div>
    </>
  );
};
