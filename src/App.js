// src/App.jsx
import React from "react";
import "./App.css";

import freestyleImg from "./assets/freestyle.jpg"



function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Coach Kevin Swim Lessons</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h2>Private Swim Lessons in Laguna Niguel</h2>
          <p>Splash, Learn, and Gain Confidence — Swim Lessons for All Ages!</p>
          <a href="#contact" className="hero-button">Book a Lesson</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about">
        <h3>About Me</h3>
        <img src={freestyleImg} alt="Coaching swim lesson" className="image" />
        <p>
          Hi, I’m <strong>Kevin Ng</strong> — a former Rhody Ram collegiate swimmer, CPR/First Aid certified lifeguard, Tier II Deep End Fitness Instructor, and CrossFit coach with a <strong>passion for helping others</strong> feel confident and capable in the water. <br /> <br />



          I work with swimmers of all ages and skill levels — from children learning to float for the first time to adults refining their technique or preparing for lifeguard certification. My lessons focus on <strong>safety, fun, and steady progress</strong>, all tailored to each swimmer’s comfort and goals. <br /> <br />



          Whether your child is just starting out, you’re preparing for a swim team, or you want to <strong>feel more confident in the water</strong> yourself, I’ll help you build strong swimming fundamentals and a lifelong love for the water.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <h3>Skills & Services</h3>
        <div className="service-list">
          <div className="service-card">Learn All 4 Competitive Strokes</div>
          <div className="service-card">Swim Team Preparation</div>
          <div className="service-card">Lifeguard Prep & Training</div>
          <div className="service-card">Surf Confidence & Ocean Safety</div>
          <div className="service-card">Adult & Youth Lessons</div>
          <div className="service-card">Private Pool Access in Laguna Niguel</div>
        </div>
      </section>


      {/* Pricing Section */}
      <section id="pricing" className="section pricing">
        <h3>Pricing</h3>
        {/* <img src={poolImg} alt="Private pool" className="image" /> */}
        <p>30 Minute Single Private Swim Lesson — <strong>$65</strong></p>
        <p>5 Swim Lesson Pack — <strong>$300</strong></p>
        <p>10 Swim Lesson Pack — <strong>$500</strong></p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h3>Get In Touch</h3>
        <form
          action="https://formspree.io/f/myzlgddz"
          method="POST"
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="cellphone" name="cellphone" placeholder="Your Phone Number" required />
          <textarea name="message" placeholder="Tell Me About Your Goals" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <p>📍 Laguna Niguel, CA</p>
          <p>✉️ kevinng3292@gmail.com</p>
          <p>📞 908-956-1282</p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; {new Date().getFullYear()} Kevin Ng Swim Lessons. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App; 
