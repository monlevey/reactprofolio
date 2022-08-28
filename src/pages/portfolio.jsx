import React from "react";
import "../components/css/portfolio.css";

export default function Portfolio() {
  return (
    <div>
      <section className="portfolio">
      <h2>Portfolio</h2>
      <p> I am working on lots of coding projects. Many of them will be featured here for you to explore!</p>
      <p>Click the images to visit functioning applications or the text to be taken to the code.</p>
    </section>
      




<article>
<div class="gallery">
    <a href="https://github.com/bernardjbs/Medic-Manager" target="_blank" rel="noreferrer"><h3>Medic Manager - A Group Project</h3>
    <div>
      <p>
        Medic - An app that enables the user to add, update and delete their stored medications, track expiry dates, and be reminded by email when to replace them. 
        Created collaboratively by Dave, Bernard, ChiChi and Monique. Visit https://desolate-brook-03478.herokuapp.com/ to see the final product or https://github.com/bernardjbs/Medic-Manager for our code.
      </p>
    </div>
    </a>
 </div>

  <div class="gallery">  
    <a href="https://desolate-brook-03478.herokuapp.com/" target="_blank" rel="noreferrer">
      <img src={require(`../components/images/MEDIC-MANAGER.gif`)} alt="Medic Manager Demo"/>
    </a>
  </div>


  <div class="gallery">
    <a href="https://samw1s3.github.io/group_project1/" target="_blank" rel="noreferrer"><h3>Awkward Turtle Moments - A Group Project</h3>
    <div>
      <p>
        Awkward Turtle Moments - An app that generates a range of conversation starters to help our users avoid awkward moments, when on dates. 
        Created collaboratively by Sam, Marc, Kirsten and Monique.
      </p>
    </div>
    </a>
 </div>

  <div class="gallery">  
    <a href="https://samw1s3.github.io/group_project1/" target="_blank" rel="noreferrer">
      <img src={require(`../components/images/Awkward-Turtle-Moments.gif`)} alt="Awkward Turtle Moments Demo"/>
    </a>
  </div>



  <div class="gallery">
    <a href="https://monlevey.github.io/QuizGame/" target="_blank" rel="noreferrer"><h3>Quiz Game - A Coding Quiz</h3>
    <div>
      <p>
        Quiz Game - A game that tests your coding knowledge, in a fast paced multiple choice quiz, that allows you to save your highscores.
      </p>
    </div>
    </a>
 </div>

  <div class="gallery">  
    <a href="https://monlevey.github.io/QuizGame/" target="_blank" rel="noreferrer">
      <img src={require(`../components/images/Coding-Quiz.gif`)} alt="Quiz Game Demo"/>
    </a>
  </div>


  <div class="gallery">
    <a href="https://monlevey.github.io/passwordGenerator/" target="_blank" rel="noreferrer"><h3>Password Generator</h3>
    <div>
      <p>
        Password Generator - A website that generates a password, to match your selected criteria.
      </p>
    </div>
    </a>
 </div>

  <div class="gallery">  
    <a href="https://monlevey.github.io/passwordGenerator/" target="_blank" rel="noreferrer">
      <img src={require(`../components/images/PasswordGenerator.gif`)} alt="Password Generator Demo"/>
    </a>
  </div>

        <div class="gallery">
          <a href="https://monlevey.github.io/Bootcamp-Homework/" target="_blank" rel="noreferrer"><h3>Horiseon Refactored Code</h3>
          <div>
            <p>The Horiseon website was an initial refactoring project to create semantic HTML and condense CSS. 
              The success criteria involved restructuring to meet accessibility standards (screenreaders).</p>
          </div>
          </a>
       </div>

      <div class="gallery">  
        <a href="https://monlevey.github.io/Bootcamp-Homework/" target="_blank" rel="noreferrer">
          <img src={require(`../components/images/Horiseon-website-demo.png`)} alt="Horiseon Website Demo"/>
        </a>
      </div>
      
      <div class="gallery">
         <p> Coming Soon?</p>
      </div>

      <div class="gallery">
        <img src={require(`../components/images/Watch-This-Space.jpg`)} alt="Watch This Space Sign"/>
     </div>
</article>

    </div>
  );
}