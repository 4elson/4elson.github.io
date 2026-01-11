export default function Contact() {
  return (
    <div className="contact-section">
      <h2 className="section-title">$ cat contact.sh</h2>
      <div className="contact-content">
        <p className="contact-intro">
          # Interested in DevOps, Cloud Infrastructure, or automation?
          <br />
          # Feel free to reach out!
        </p>

        <div className="contact-methods">
          <div className="contact-item">
            <span className="contact-label">location:</span>
            <span className="contact-value">Chennai, India 🌏</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">email:</span>
            <a
              href="mailto:4elson@gmail.com"
              className="contact-link"
            >
              4elson@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">linkedin:</span>
            <a
              href="https://linkedin.com/in/elsonj"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              linkedin.com/in/elsonj
            </a>
          </div>
          <div className="contact-item">
            <span className="contact-label">github:</span>
            <a
              href="https://github.com/4elson"
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              github.com/4elson
            </a>
          </div>
        </div>

        <div className="download-resume">
          <a
            href="/resume_elson_aws_devsecops.pdf"
            download="Elson_Johnson_AWS_DevSecOps_Resume.pdf"
            className="resume-button"
          >
            <span className="button-icon">📄</span>
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
