import React from "react";
// import user from "../images/cafe.jpg";

 function Navbar(){
    return (
        

        <aside className="profile-card">
          
          <header>
            
           
            <a href="">
              <img src="images/cafe.jpg"/>
            </a>
        
          
            <h1>Ali Shahab</h1>
            
         
            <h2>Another Web Designer</h2>
            
          </header>
          
          
          <div className="profile-bio">
            
            <p>Specialties are Creative UI, HTML5, CSS3, Semantic Web, Responsive Layouts, Web Standards Compliance, Performance Optimization, Cross Device Troubleshooting.</p>
            
          </div>
          
        
          <ul className="profile-social-links">
            
           
            <li>
              <a href="">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-twitter.svg"/>
              </a>
            </li>
            
            
            <li>
              <a href="">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-envato.svg"/>
              </a>
            </li>
            
   
            <li>
              <a href="">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/social-codepen.svg"/>
              </a>
            </li>
            
            
            
          </ul>
          
        </aside>
     
    )
}
export default Navbar