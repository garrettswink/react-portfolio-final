import "../styles/About.css";

export default function About() {
  return (
    <>
      <h1>About Me</h1>

      <div className="about-flex-container">
     
      <div className="image-container">
      <img src="/nemoy.jpg" className="profile-image" />
      </div>
      
      <div className="bio-container">
        <div className="copy-container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, quidem
          itaque? Beatae unde error sequi asperiores nisi quo nemo, rerum atque
          iste odio corporis nulla. Eaque doloremque excepturi obcaecati ex!
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic dolores
          explicabo magni sint animi ea temporibus at officia, aut, voluptatem
          tempora, autem laudantium. Magnam, sunt! Rerum cumque assumenda
          praesentium tempore.
        </p>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo rem natus
          consectetur porro perferendis error, tempore amet itaque accusantium
          totam provident quod possimus debitis, cumque modi atque. Maiores,
          dolorem at!
        </p>
        </div>
      </div>
      </div>
    </>
  );
}



