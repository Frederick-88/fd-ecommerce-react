import React from "react";
import Chart from "../../assets/chart.jpg";

const Dashboard = () => {
  return (
    <div className="text-center">
      <div className="text-center">
        <img src={Chart} alt="..." className="w-100" />
        This is the data today.
      </div>
    </div>
  );
};
export default Dashboard;
