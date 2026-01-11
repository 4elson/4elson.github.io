type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  points: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Senior AWS DevSecOps Engineer",
    company: "Hapag-Lloyd Technology Center, Chennai",
    duration: "Apr 2025 – Present",
    points: [
      "Built an agentic ChatOps POC to automate infrastructure operations",
      "Designed cost-optimized, auto-scaling GitLab Runner architecture",
      "Implemented secure Terraform pipelines with Checkov integration",
      "Automated infrastructure drift detection and alerting",
      "Built vulnerability analytics using AWS Security Hub and OpenSearch",
      "Standardized Terraform using layered Terragrunt architecture",
    ],
  },
  {
    role: "Technical Support Specialist – AWS",
    company: "Hapag-Lloyd Technology Center, Chennai",
    duration: "Apr 2024 – Mar 2025",
    points: [
      "Built AI-powered Jira triaging system reducing manual effort by 95%",
      "Containerized legacy applications and migrated to AWS ECS",
      "Implemented Kubernetes observability using Prometheus and Grafana",
      "Automated EKS security scanning using Trivy Operator",
    ],
  },
  {
    role: "Technical Support Specialist – AWS",
    company: "Solverminds Solutions and Technologies, Chennai",
    duration: "May 2023 – Mar 2024",
    points: [
      "Built centralized Grafana dashboards for EKS-hosted platforms",
      "Developed Flask applications for internal process automation",
      "Automated SLA reporting using Python and Jira APIs",
    ],
  },
  {
    role: "Assistant System Engineer",
    company: "Tata Consultancy Services, Chennai",
    duration: "May 2021 – Mar 2023",
    points: [
      "Migrated on-prem Microsoft SQL Server to Azure SQL Database",
      "Executed disaster recovery drills for multi-node database clusters",
      "Worked on ITIL-aligned incident, change, and problem management",
    ],
  },
];

export default function Experience() {
  return (
    <div className="experience-section">
      <h2 className="section-title">$ cat experience.log</h2>
      <div className="experience-timeline">
        {experiences.map((exp, idx) => (
          <div key={idx} className="experience-item">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-duration">{exp.duration}</span>
            </div>
            <ul className="experience-points">
              {exp.points.map((point, pointIdx) => (
                <li key={pointIdx}>
                  <span className="bullet">→</span> {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
