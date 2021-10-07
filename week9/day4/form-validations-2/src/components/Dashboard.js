import React from "react";
import { DashboardContainer, Work, Charts } from "../styled-components/DashboardStyle";
import Chart from "./Charts";
import WorkOrders from "./WorkOrders";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>
      <Charts>
        <Chart />
      </Charts>  
      <Work>
        <WorkOrders />
      </Work>
    </DashboardContainer>
  );
}