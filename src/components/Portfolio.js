import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
      <h3>My Work</h3>
      <div className="portfolio-items">
      
        <div className="portfolio-item">
        <div className='Project'> <h4>Portfolio Website</h4></div>
          <p>
      ●	Created a portfolio website, designed using the ReactJS framework. It showcases my skills in creating multipage websites, utilizing Hooks, and Responsive web designing.
      </p>
      <p>
      ●	In this project, I have used HTML, CSS, JavaScript, and the ReactJS framework to showcase my skills. And also this is fully responsive web design
      </p>
      <footer className='link'>
        <a href="https://www.linkedin.com/in/abhishekvats29" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>

      <div className="portfolio-item">
        <div className='Project'> <h4>Shopping Cart Application</h4></div>
          <p>
      ●	This project uses ReactJS and Redux Toolkit to build a shopping cart where users can add items, view their cart, and see the total amount deducted from their cart when they purchase items.
      </p>
      <p>
      ●	In this project, I have used HTML, CSS, JavaScript, and the ReactJS framework to showcase my skills.
      Uses Redux to manage the global state of the cart, user info, and product listings.
      </p>
      <footer className='link'>
        <a href="https://github.com/abhishekvats29/Shopping-Cart-App.git" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>


      <div className="portfolio-item">
        <div className='Project'> <h4>Currency Converter App</h4></div>
          <p>
      ●	Created a responsive web application using ReactJS to provide real-time currency conversion. Integrated with a
      third-party API to fetch live exchange rates for over 150 currencies.
      </p>
      <p>
      ●	In this project, I have used HTML, CSS, JavaScript, Restfull API and the ReactJS framework to showcase my skills. And also this is fully responsive web design
      </p>
      <footer className='link'>
        <a href="https://github.com/abhishekvats29/Currency-Converter-Application.git" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>
        

      <div className="portfolio-item">
        <div className='Project'> <h4>Online Quiz Platform</h4></div>
          <p>
      ●	Developed a responsive online quiz application using ReactJS, allowing users to take quizzes on various topics, track their scores, and review their answers.

      </p>
      <p>
      ●	Successfully deployed the application, receiving positive feedback from users. Improved user engagement by 30% through interactive and user-friendly design.
      </p>
      <footer className='link'>
        <a href="https://vats-quiz-app.netlify.app/" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>


      <div className="portfolio-item">
        <div className='Project'> <h4>Tic-Tac-Toe Game</h4></div>
          <p>
      ●	Created a classic TIC-TAC-TOE game, which has been played by over 100 users across multiple platforms, fostering community engagement and receiving a 98% positive rating for user experience.
      </p>
      <p>
      ●	Developed games using HTML, CSS, JavaScript, and ReactJS, resulting in a 25% increase in user engagement and positive feedback from 95% of users.
      </p>
      <footer className='link'>
        <a href="https://abhishekvats29.netlify.app/" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>
      <div className="portfolio-item">
        <div className='Project'> <h4>Plant Inventory Management System</h4></div>
          <p>
      ●	Implemented a project to address challenges related to typical stock analysis by providing monthly inward deliveries, monthly outgoing deliveries, and monthly returns. Using SQL and My SQL database.
      </p>
      <p>
      ●	Innovated stock tracking systems by implementing comprehensive monthly reports for inward deliveries, outgoing deliveries, and returns; reduced stock discrepancies by 40% and streamlined supply chain operations.
      </p>
      <footer className='link'>
        <a href="https://github.com/abhishekvats29/Plant-Inventory-Management-System.git" target="_blank" rel="noopener noreferrer">
         <button className='link'>Link</button> 
        </a></footer>
      </div>
      
      </div>

      <div>
        <hr style={{ background: 'black', height: '4px', border: 'none', marginTop:'5vw' }} />
      </div>
    </section>
  );
};

export default Portfolio;
