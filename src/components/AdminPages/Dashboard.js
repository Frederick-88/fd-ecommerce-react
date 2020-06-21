import React from "react";
import Chart from "../../assets/chart.jpg";

const Dashboard = () => {
  return (
    <div className="text-center">
      <div className="text-center">
        <img src={Chart} alt="..." className="w-75" />
        This is the data today.
      </div>
    </div>
  );
};
export default Dashboard;
