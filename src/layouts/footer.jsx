import React from 'react';
import '../components/css/footer.css';
export default function Footer() {
 
    return (
        <div className="footer"> 
        {/* <!-- Contact me information and links to github and linkedin --> */}
      
        <div className="navbar">
            <ul>
          <a href="https://github.com/monlevey" target="_blank" rel="noreferrer"><h3 className='footer-link'>GitHub</h3></a>
       </ul>
       </div>
       <div className='navbar'> 
      <ul>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B6Rc246d6TRmou5ma4JITJQ%3D%3D" target="_blank" rel="noreferrer"><h3 className='footer-link'>Linked in</h3>
          </a>
      </ul>
      </div>
    </div>
  )
}