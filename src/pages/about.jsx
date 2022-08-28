import React from 'react'
import "../components/css/about.css";

export default function About() {
  return (
    <div>
    <section className="aboutme">
      <h2>About Me</h2>
      <p>There are so many things to know about me...</p>
    </section>
 
 
   <article>
     <div class="gallery">
       <p> Currently I am an awesome primary school teacher - looking to move into the world of web development. </p>
        <p> My web development interest was sparked when I started designing websites in WIX, Weebly and Squarespace. Teaching involves constant creation of online resources, and I found it was becoming my favourite part of the job.</p>
        <p>With my teaching expertise, design creativity and Web development skills, the options for creating amazing things is endless.
       </p>
    </div>

   <div class="gallery">  
   <img
          className="logo"
          src={require(`../components/images/Profile-Mon.jpg`)}
          alt="Mon Levey Logo"
        />
   </div>
   
   <div className="gallery">
      <p> I will be a full stack web developer, with the ability to create magnificent websites from the beginnings of an idea. 
        </p>
        <p>
        My specialties are using React and Javascript to create easy to load, highly accessible websites. I am dabbling in SEO in hope to build marketable design solutions that are more prominently exposed to their target clients.
        I intend to develop apps to make the world a more convenient and useful place - I constantly seek out ways to problem solve, reorganise and streamline everyday processes that most people think nothing of. 
      </p>
   </div>

   <div className="gallery">
     <p> Outside the web development realm :</p>
       <p>I have two hilarious doggos. A Rottweiler; "Bubbles" and a Miniature Dachshund; "Penny".</p>
       <p>I've backpacked around Australia, Europe and Asia.</p>
       <p>Absolutely love the beach!</p>
       <p>Would happily live off eating seafood for the rest of my life.</p>
       <p>Play Halo relentlessly, yet never improve my K/D?!</p>
       <p> Always up for a game of Catan.</p>
     
  </div>
   </article>
   </div>
  )
}
