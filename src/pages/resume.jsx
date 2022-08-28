import React from 'react'
//importing resume to the page
import myResume from "../components/documents/MoniqueLeveyResume.pdf";

function Resume() {
  return (
    <div>

    <section className="portfolio">
      <h2>Resume</h2>
      <p> Download my resume if you would like to collaborate.</p>
    </section>

    <article>
     <div class="gallery">
     <h1>Please find my resume <a href={myResume} download="MoniqueLeveyResume.pdf">here.</a>
     </h1>
    </div>

   <div class="gallery">  
   <img
          className="logo"
          src={require(`../components/images/WalkingToMyWedding.jpg`)}
          alt="Mon Levey Logo"
        />
   </div>
   
 
   <div className="gallery">
     <h3> My Amazing Front End Skills include :</h3>
       <p>React</p>
       <p>Javascript</p>
       <p>CSS</p>
       <p>HTML</p>
       <p>Jquery</p>
       <p>Bootstrap</p>
   </div>

   <div className="gallery">
     <h3> My Brilliant Back End Skills include :</h3>
       <p>API</p>
       <p>MERN</p>
       <p>MySQL</p>
       <p>GraphSQL</p>
       <p>Express</p>
       <p>Node JS</p>
       <p>MongoDB and Mongoose</p>
  </div>
   </article>
    </div>
  )
}

export default Resume