import React from 'react'
import resumeData from '../resumeData';

export const Resume = () => {
  return (
    <section id="resume">

    <div className="row education">

       <div className="three columns header-col">
          <h1><span>Education</span></h1>
       </div>

       <div className="nine columns main-col">
         {
           resumeData.education && resumeData.education.map((item)=>{
             return(
               <div className="row item">
                  <div className="twelve columns">
                     <h3>{item.UniversityName}</h3>
                     <p className="info">
                     {item.specialization}
                     <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                     <p>
                     {item.Achievements}
                     </p>
                  </div>
               </div>
             )
           })
         }
       </div>
    </div>
   <div className="row work">
       <div className="three columns header-col">
          <h1><span>Work</span></h1>
       </div>

       <div className="nine columns main-col">
         {
           resumeData.work && resumeData.work.map((item) => {
             return(
               <div className="row item">
                  <div className="twelve columns">
                     <h3>{item.CompanyName}</h3>
                     <p className="info">
                     {item.specialization}
                     <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                     <p>
                     {item.Achievements}
                     </p>
                  </div>

               </div>

             )
           })
         }
       </div> 
    </div>


    <div className="row skill">

       <div className="three columns header-col">
          <h1><span>Skills</span></h1>
       </div>

       <div className="nine columns main-col">

          <p>
          {resumeData.skillsDescription}
          </p>

      <div className="bars">

         <ul className="skills">
         <li>
                 <span className={`bar-expand css`}>
                 </span><em>{resumeData.skill1}</em>
          </li>
          <li>
                 <span className={`bar-expand html5`}>
                 </span><em>{resumeData.skill2}</em>
          </li>
          <li>
                 <span className={`bar-expand css`}>
                 </span><em>{resumeData.skill3}</em>
          </li>
          <li>
                 <span className={`bar-expand html5`}>
                 </span><em>{resumeData.skill4}</em>
          </li>
          <li>
                 <span className={`bar-expand css`}>
                 </span><em>{resumeData.skill5}</em>
          </li>
        </ul>

      </div>

    </div>

    </div>

 </section>

  )
}
