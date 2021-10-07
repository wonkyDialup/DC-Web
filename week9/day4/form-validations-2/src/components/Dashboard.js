import React from "react";
import { DashboardContainer, Work, Charts, Title } from "../styled-components/DashboardStyle";
import Chart from "./Charts";
import WorkOrders from "./WorkOrders";

export default function Dashboard() {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <Charts>
        <Chart />
      </Charts>  
      <Work>
        <WorkOrders />
      </Work>
    </DashboardContainer>
  );
}