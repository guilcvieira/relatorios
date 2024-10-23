import ReportsBlock, { IReport } from "@/components/reports/reports-block";
import { Cast, ChartPie, MessageSquare, Users } from "lucide-react";
import React from "react";

const announcemennts: IReport[] = [
  {
    title: "Desempenho dos Comunicados",
    type: "visao-geral",
    icon: ChartPie,
  },
  {
    title: "Ranking dos Colaboradores",
    type: "um-a-um",
    icon: Users,
  },
  {
    title: "Ranking dos Comunicados",
    type: "um-a-um",
    icon: Cast,
  },
  {
    title: "Ranking dos Comentários",
    type: "um-a-um",
    icon: MessageSquare,
  },
  {
    title: "Ranking dos Comentários (resumo)",
    type: "um-a-um",
    icon: MessageSquare,
  }

]

const Home: React.FC = () => {
  return (
    <div className="w-full container">
      <ReportsBlock title="Comunicados" description="Dados e informações mais relevantes dos comunicados" reports={announcemennts} />
    </div>
  )
}

export default Home;