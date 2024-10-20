import React from 'react';
import './About.css';
import Slider from 'react-slick';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const images = [
    './av 1.jpeg',
    './av 2.jpeg',
    './av 3.jpeg',
    './av 4.jpeg',
    './av 5.jpeg',
    './av 6.jpeg',
  ];
  

  return (
    <div>
      <img src='./vats img (2).jpeg' alt='description'></img>
      <h2 className='hey'>Hey I am,</h2>
      <h2 className='name'>Abhishek Vats</h2>
      <h2 className='web'>Software Developer</h2>
      <p className='para'>I am Abhishek Vats, a Software Developer. A passionate frontend developer with a knack for creating engaging and interactive web applications. “I am enjoying making the application.”</p>
      <footer className='link'>
        <a href="https://drive.google.com/file/d/1K2QbeAtGOCvaM3YhUWCadHfNVDOXTdrp/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
          <button className='link'>Download CV</button>
        </a>
      </footer>
      <div>
        <hr style={{ background: 'black', height: '4px', border: 'none', marginTop:'5vw' }} />
      </div>

      <div><img class="original-shape" src='./web.gif' alt='description'></img></div>
      <div className ='about'>
    
        <h1>About Me</h1>
        <div className='boxs'>
          <p>Hii, I am <span>Abhishek Vats,</span> a software engineering student. A passionate frontend developer with a knack for creating engaging and interactive web applications.</p>
          <p>Technology excites me, and I am always in awe of the change it drives in the world. Certain skills that I have worked with include Web Development <span>(Java, HTML, CSS, JavaScript, ReactJS, NodeJS)</span> and MongoDB. And what I lack in skills I make up for with my determination to learn. My expertise includes frontend development, machine learning, computer vision, and real-time systems development.</p>
          <p>When I'm not coding, I enjoy exploring drawing and sketching images, which I love to do. Outside of technology, I am a music lover.</p>
          <p>Feel free to check out my portfolio or connect with me on LinkedIn. Let's create something amazing together!</p>
          <div className='linkdin'>
            <a href="https://www.linkedin.com/in/abhishekvats29" target="_blank" rel="noopener noreferrer">
              <button className='link'>LinkedIn</button>
            </a>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div>
      <hr style={{ background: 'black', height: '4px', border: 'none', marginTop:'5vw' }} />
      </div>
    </div>
  );
};

export default Home;
