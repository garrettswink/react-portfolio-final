import "../styles/Card.css";
import ProjectCard from '../components/Portfolio-Card';

export default function Portfolio() {

  const projects = [
    { title: 'Java Quiz', 
    image: 'quiz.gif', 
    description: 'A JS Quiz Written In Simple JS', 
    repoLink: 'https://github.com/garrettswink/quiz.3', 
    deployLink: 'https://garrettswink.github.io/quiz.3/' },

    { title: 'News App', 
    image: 'news.gif', 
    description: 'A Simple News API Site for Headlines', 
    repoLink: 'https://github.com/garrettswink/newsapp', 
    deployLink: 'https://garrettswink.github.io/newsapp/' },

    { title: 'Weather App', 
    image: 'weather.gif', 
    description: 'A Non-Aesthetic, but Functional Weather App', 
    repoLink: 'https://github.com/garrettswink/weather3', 
    deployLink: 'https://garrettswink.github.io/weather3/' },

    { title: 'Note Taking App', 
    image: 'notetaker.gif', 
    description: 'A Simple Note Taking Application', 
    repoLink: 'https://github.com/garrettswink/note-taker', 
    deployLink: 'https://new-note-taker-8c633e15e27f.herokuapp.com/' },

    { title: 'Only Flags', 
    image: 'onlyflags.png', 
    description: 'The Worst Dating App Ever', 
    repoLink: 'https://github.com/tovalgreene/onlyflags', 
    deployLink: 'https://onlyflags-ed7969826b4a.herokuapp.com/' },

    { title: 'SVG Generator', 
    image: 'svg-gen.gif', 
    description: 'An SVG Logo Generator', 
    repoLink: 'https://github.com/garrettswink/svg-gen', 
    deployLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },

  ];

  return (
    <>
      <h1>Project Portfolio</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            repoLink={project.repoLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
    </>
  );
}











// import "../styles/Card.css";

// export default function Portfolio() {
//   return (
//     <>
//       <h1>Project Portfolio</h1>

//       <div className="card-container">
        
//         <div className="portfolio-card">
//           <h2 className="card-title">This is a Card Title</h2>
//           <img src="quiz.gif" className="card-image"></img>
//           <p className="card-description">
//             Here is a short description of the project.
//           </p>
//           <div className="button-div">
//             <button className="repo-btn">Repo</button>
//             <button className="deploy-btn">Deployed</button>
//           </div>
//         </div>

        


//       </div>
//     </>
//   );
// }
