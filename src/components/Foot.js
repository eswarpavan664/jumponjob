/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from "../images/job.png"
import '../index.css'
function Foot() {
    return (
        <div>
             <footer class="footer-distributed">

<div class="footer-left">
            <img src={logo} className="image"/>
        <h3> <span>Jump on Jobs</span></h3>

         

        <p class="footer-company-name">© 2019  Jump on Jobs Solutions Pvt. Ltd.</p>
      </div>

<div class="footer-center">
<div>
<i class="fa fa-map-marker"></i>
  <p><span>309 - Vissakoderu,
  Bldg. No. A - 1, Sector - 1</span>
  </p>
</div>

<div>
<i class="fa fa-phone"></i>
<p>+91 9491662643</p>
</div>
<div>
<i class="fa fa-envelope"></i>
 
</div>
</div>
<div class="footer-right">
<p class="footer-company-about">
<span>About the Website</span>
 We are providing nearly 2000+ Job for your  
career buildup   </p>
<div class="footer-icons">
<a href="#"><i class="fa fa-facebook"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-instagram"></i></a>
<a href="#"><i class="fa fa-linkedin"></i></a>
<a href="#"><i class="fa fa-youtube"></i></a>
</div>
</div>
</footer>
                   
        </div>
    )
}

export default Foot;
