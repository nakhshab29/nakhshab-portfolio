export interface Project {
  num: string;
  name: string;
  desc: string;
  stat: string;
  tags: string[];
  variant: "p1" | "p2";
}

export const projects: Project[] = [
  {
    num: "01",
    name: "AI-Based Vehicle\nInspection Chatbot",
    desc: "Intelligent chatbot for field agents using NLP and image processing, automating manual data entry. Real-time vehicle condition analysis via Azure Cognitive Services.",
    stat: "↑ 40% data retrieval speed",
    tags: ["ASP.NET Core", "Python NLP", "Azure Cognitive"],
    variant: "p1",
  },
  {
    num: "02",
    name: "Vehicle Inspection\nReporting Engine",
    desc: "Parallel task execution in C# for real-time report generation and dispatch. Replaced a fully manual, error-prone process with automated concurrent pipelines.",
    stat: "↓ 30% processing time cut",
    tags: ["C# Parallel", "ASP.NET Core", "Real-time"],
    variant: "p2",
  },
];
