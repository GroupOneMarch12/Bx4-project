import React from 'react';
import "../components/Resources/style.css";
import allyson from "../components/Resources/media/ALLYSON.jpg"


const Leader = () => {
  return (
    <div>
      

    <p className="lead-title">LEADERSHIP</p>
   
    <div id='section-lead'>
        
        < div className="left-wrapper">
            
            <img src={allyson} alt="#"/>
         
         
            <p id="overviews">ALLYSON DIPAOLO<br />HARRISON, P.E., LEED AP<br/>
                PRESIDENT</p>

               
             <div className='link'>
              <a  href="/" alt="#"><i className="fab fa-linkedin-in"></i></a>
              
              </div>
                
                   
             

         </div>
        
     
    
        
  <div className='content-details'>
          <p>Allyson DiPaolo Harrison is the founder and President of ADH Engineering PLLC.
            </p>
            
            ​
            <p>Prior to creating ADH Engineering PLLC, Allyson co-led and developed the electrical
               engineering department at a national design and construction firm. She was responsible 
               for developing the company’s design standards, implementing quality control procedures,
                managing and mentoring staff, and providing innovative electrical designs on the 
                company’s most complex projects.</p>
           
            
            ​
            <p>With over 15 years of technical experience, Allyson has designed and managed projects
               ranging from small tenant renovations to over 600,000 square feet greenfield projects.
                She has worked on projects from the conceptual phase, through design and construction, 
                and into completion. Being an active team member throughout the project’s life cycle, 
                Allyson has collaborated directly with architects, design engineers, general and trade 
                contractors,  vendors, reviewers, and owner representatives. She has experience with 
                LEED projects and Title 24 electrical requirements. Allyson focuses on effective communication,
                  detailed coordination, and constructible designs. </p>
            
            
            ​
            <p>Allyson graduated from Pennsylvania State University with a Bachelor of Science 
              Degree in Electrical Engineering. She is licensed in Virginia, Maryland, West Virginia, 
              North Carolina, New Jersey, Ohio, Oregon, and California. 
            </p>
           
            ​
            <p>While continuing her industry passion at ADH Engineering PLLC, 
              Allyson remains committed to providing the high-quality, efficient design deliverables to our customers.</p>
            
  </div>
  
  
 
  

   
        
        
     </div>
     
     <div className='borderline'>

  </div>
   
</div>
  );
}

export default Leader;