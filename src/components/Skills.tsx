export default function Skills() {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "AWS (EC2, S3, Lambda, ECS, EKS)", level: 95 },
        { name: "Azure (VMs, AKS, Functions)", level: 75 },
        { name: "Google Cloud Platform", level: 60 },
        { name: "Terraform", level: 90 },
        { name: "CloudFormation", level: 85 },
      ],
    },
    {
      category: "Container & Orchestration",
      skills: [
        { name: "Kubernetes", level: 90 },
        { name: "Docker", level: 95 },
        { name: "Helm", level: 85 },
        { name: "ECS/EKS", level: 85 },
      ],
    },
    {
      category: "CI/CD & Automation",
      skills: [
        { name: "Jenkins", level: 90 },
        { name: "GitLab CI/CD", level: 85 },
        { name: "GitHub Actions", level: 90 },
        { name: "ArgoCD", level: 80 },
        { name: "Ansible", level: 85 },
      ],
    },
    {
      category: "Monitoring & Logging",
      skills: [
        { name: "Prometheus & Grafana", level: 85 },
        { name: "ELK Stack", level: 80 },
        { name: "DataDog", level: 75 },
        { name: "CloudWatch", level: 90 },
      ],
    },
    {
      category: "Security & DevSecOps",
      skills: [
        { name: "Vault", level: 80 },
        { name: "SonarQube", level: 85 },
        { name: "Snyk", level: 75 },
        { name: "AWS Security Hub", level: 85 },
      ],
    },
    {
      category: "Programming & Scripting",
      skills: [
        { name: "Python", level: 90 },
        { name: "Bash", level: 95 },
        { name: "PowerShell", level: 80 },
        { name: "Go", level: 70 },
      ],
    },
  ];

  return (
    <div className="skills-section">
      <h2 className="section-title">$ ls -la skills/</h2>
      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3 className="category-title">## {category.category}</h3>
            <div className="skills-list">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
