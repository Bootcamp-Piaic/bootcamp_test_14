import React from 'react'
import resumeData from '../resumeData';

export const ContactUs = () => {
  return (
        <section id="contact">
          <div className="row section-head ">
            <div className="ten columns">
              <p className="lead" style={{fontSize:"200%",color:"white"}}>
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4> Linked in :
                  {resumeData.socialLinks[0].url}
                </h4>
              </div>
            </aside>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>Instagram  :
                  {resumeData.socialLinks[2].url}
                </h4>
              </div>
            </aside>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>facebook  :
                  {resumeData.socialLinks[3].url}
                </h4>
              </div>
            </aside>
          </div>
        </section>
        
  )
}
