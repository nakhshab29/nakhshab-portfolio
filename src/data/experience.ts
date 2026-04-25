export interface Experience {
  period: string;
  badge: string;
  isCurrent: boolean;
  position: string;
  company: string;
  bullets: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    period: "Jun 2023 — Present",
    badge: "Current",
    isCurrent: true,
    position: "Senior Software Engineer",
    company: "eFleet Systems Private Limited · Mumbai",
    bullets: [
      "Architected RESTful APIs processing 50,000+ daily logistics transactions.",
      "Led full monolith-to-microservices migration — improved fault tolerance, eliminated single points of failure.",
      "CQRS + MediatR for independent scaling; Redis caching cut DB contention by 20%.",
      "Event-driven inter-service communication via RabbitMQ + Azure Service Bus.",
      "30% query response time reduction via stored procedure refactoring and SQL indexing.",
      "Docker + Azure DevOps CI/CD — reduced release cycle from days to hours.",
    ],
    tags: ["CQRS", "Redis", "RabbitMQ", "Azure", "Docker", "MediatR"],
  },
  {
    period: "Dec 2022 — May 2023",
    badge: "Previous",
    isCurrent: false,
    position: "Software Engineer",
    company: "Troposphere Solutions · Remote",
    bullets: [
      "Designed modular backend services following Clean Architecture.",
      "FAQ module with React + Cosmos DB — 15% reduction in support ticket volume.",
      "JWT auth + multi-layer validation eliminated injection vulnerabilities.",
    ],
    tags: ["React", "Cosmos DB", "JWT"],
  },
  {
    period: "Oct 2021 — Nov 2022",
    badge: "Previous",
    isCurrent: false,
    position: "Software Engineer",
    company: "Data Comp Web Technologies · Mumbai",
    bullets: [
      "Enhanced enterprise web apps on ASP.NET MVC5 + SQL Server.",
      "Shipped cross-platform mobile apps — 20% user engagement increase.",
      "Rewrote slow reporting queries — 15% faster retrieval.",
    ],
    tags: ["MVC5", "SQL", "Mobile"],
  },
];
