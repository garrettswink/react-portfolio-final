// ProjectCard.js
import "../styles/Card.css";

export default function ProjectCard({ title, image, description, repoLink, deployLink }) {
  return (
    <div className="portfolio-card">
      <h2 className="card-title">{title}</h2>
      <img src={image} alt={title} className="card-image" />
      <p className="card-description">{description}</p>
      <div className="button-div">
        <a href={repoLink} target="_blank" rel="noopener noreferrer">
          <button className="repo-btn">Repo</button>
        </a>
        <a href={deployLink} target="_blank" rel="noopener noreferrer">
          <button className="deploy-btn">Deployed</button>
        </a>
      </div>
    </div>
  );
}
