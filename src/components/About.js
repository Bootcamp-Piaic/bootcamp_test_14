import React from 'react'
import resumeData from '../resumeData';

export const About = () => {
   
   return (

       <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/awais.JPG" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>Name : {resumeData.name}</span>
                     <br></br>
       						   <span>Address : 
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>Website : {resumeData.website}</span>
                    <br></br>
                    <span>Phone No : {resumeData.contact}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

   )
}
