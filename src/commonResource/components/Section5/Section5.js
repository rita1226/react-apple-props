import React from 'react'
import appleTv from "../../images/icons/apple-tv-logo.png"
import servant from "../../images/icons/servant-logo.png"

function Section5() {
  return (
    <div>
     <section class="text-center container-fluid mx-2">
  <div class="d-md-flex">
    <div class=" Five-left  col-sm-12 col-md-6 mr-1 mb-2 ">
    <div class="tv-logo">
      <img src={appleTv} alt=""/>
    </div>
    <div class="servant">
      <img src={servant} alt=""/>
    </div>
    <div>
      <a href="#">Watch the trailer</a>
    </div>

    <div class="links-wrapper">
      <ul class="list-unstyled list-inline">
        <li class="list-inline-item"><a href="#">Learn More</a></li>
        <li class="list-inline-item"><a href="#">Buy</a></li>
      </ul>
    </div>
    </div>
    {/* <!-- Five right --> */}
    <div class=" Five-right col-sm-12 col-md-6 ml-1 mb-2">
      <div class="font-weight-bold">
        <h1>AirPods Pro</h1>
      </div>
      <div>
        <h4>Magic like you've never heard.</h4>
      </div>
    
      <div class="links-wrapper">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item"><a href="#">Learn More</a></li>
          <li class="list-inline-item"><a href="#">Buy</a></li>
        </ul>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Section5
