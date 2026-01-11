export default function About() {
  return (
    <div className="about-section">
      <h2 className="section-title">$ cat about.txt</h2>
      <div className="about-content">
        <div className="info-block">
          <p className="about-text">
            Senior DevOps Engineer with 5+ years of experience designing and implementing
            robust CI/CD pipelines, cloud infrastructure, and security automation. 
            Specialized in AWS, Kubernetes, and Infrastructure as Code.
          </p>
        </div>

        <div className="info-block">
          <h3 className="subsection-title">## Core Competencies</h3>
          <ul className="competencies-list">
            <li>Cloud Architecture & Migration (AWS, Azure)</li>
            <li>Container Orchestration (Kubernetes, Docker, ECS)</li>
            <li>CI/CD Pipeline Development (Jenkins, GitLab CI, GitHub Actions)</li>
            <li>Infrastructure as Code (Terraform, CloudFormation, Ansible)</li>
            <li>Security & Compliance (DevSecOps, SAST/DAST, Compliance Automation)</li>
            <li>Monitoring & Observability (Prometheus, Grafana, ELK Stack, DataDog)</li>
            <li>Scripting & Automation (Python, Bash, PowerShell)</li>
          </ul>
        </div>

        <div className="info-block">
          <h3 className="subsection-title">## Certifications</h3>
          <ul className="certifications-list">
            <li>
              <span className="cert-icon">✓</span> AWS Certified Solutions Architect - Professional
            </li>
            <li>
              <span className="cert-icon">✓</span> AWS Certified DevOps Engineer - Professional
            </li>
            <li>
              <span className="cert-icon">✓</span> Certified Kubernetes Administrator (CKA)
            </li>
            <li>
              <span className="cert-icon">✓</span> HashiCorp Certified: Terraform Associate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
