import React from 'react';
import '../About.css'; // Correctly reference the About.css file


function About() {
  return (
    <div className="container my-5">
      <h1>About Us</h1>
      <p>
        With sport playing an increasingly important role in more and more people’s lives, both on and off the field of play, we operate in a highly attractive industry. Based on the authenticity of the adidas brand and our constant efforts to understand our consumers’ needs, we aim at capitalizing on the acceleration of favorable long-term structural trends by pushing the boundaries of products, experiences, and services.
      </p>
      <p>
        Since the creation and launch of our ‘Own the Game’ strategy, the economic and political environment we operate in has significantly changed. Macroeconomic challenges as well as geopolitical tensions have had an adverse impact on our business, our consumers, and business partners. Paving the way for a restart, Bjørn Gulden joined adidas as new CEO in January 2023. In this context, we are currently conducting a thorough strategic review, which also includes the financial ambition for 2025.
      </p>
      <h2>Our Purpose</h2>
      <img 
        src="https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_1000/v1705910723/adidas-group/images/purpose_en_zs9gg0.jpg" 
        alt="Our Purpose" 
        className="custom-fluid-image mb-4" 
      />
      
      <p>
        Our purpose, ‘Through sport, we have the power to change lives,’ guides the way we run our company, how we work with our partners, how we create our products, and how we engage with our consumers. We will always strive to expand the boundaries of human possibility, to include and unite people in sport, and to create a more sustainable world.
      </p>
      
      <h3>OUR MISSION</h3>
      <img 
        src="https://res.cloudinary.com/confirmed-web/image/upload/c_lfill,w_1000/v1710174644/adidas-group/images/2024/Misson-en-03-2024_x6irvw.png" 
        alt="Our Mission" 
        className="custom-fluid-image my-4" 
      />
     
      <p>
        Athletes do not settle for average. And neither do we. We have a clear mission: To be the best sports brand in the world. Every day, we come to work to create and sell the best sports products in the world, and to offer the best service and consumer experience – and to do it all in a sustainable way. We are the best when we are the credible, inclusive, and sustainable leader in our industry.
      </p>
    </div>
  );
}

export default About;
