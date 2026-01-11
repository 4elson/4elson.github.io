export default function Hero() {
  return (
    <>
      <div className="ascii-art">
        <pre>{`
    ____            ____            
   / __ \\___  _   _/ __ \\____  _____
  / / / / _ \\| | / / / / / __ \\/ ___/
 / /_/ /  __/| |/ / /_/ / /_/ (__  ) 
/_____/\\___/ |___/\\____/ .___/____/  
                      /_/            
        `}</pre>
      </div>
      <div className="hero-intro">
        <h1>
          <span className="name-highlight">Elson Johnson</span>
        </h1>
        <p className="role">AWS DevSecOps Engineer | Cloud Architect</p>
        <p className="tagline">
          Building secure, scalable infrastructure with automation
        </p>
      </div>
    </>
  );
}
