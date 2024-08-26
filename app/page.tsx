import ReportsBlock, { IReport } from "@/components/reports/reports-block";
import { Cast, MessageSquare } from "lucide-react";
import React from "react";

const reports: IReport[] = [
  {
    title: "Ranking dos Comentários",
    type: "visao-geral",
    icon: MessageSquare,
  },
  {
    title: "Ranking dos Comunicados",
    type: "um-a-um",
    icon: Cast,
  }

]

const Home: React.FC = () => {
  return (
    <div className="w-full container">
      <ReportsBlock title="Comunicados" reports={reports} />
    </div>
  )
}

export default Home;