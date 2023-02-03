import React, { Component } from 'react'
import Mainlink from '../Mainlink'
import laptop from "../../images/home/mac-laptop.jpg"

export default class Section1 extends Component {
  render() {
    return (
      <div>
        <section class="text-center">
      <div class="One">
        <div>
          <img src="../images/home/mac-laptop.jpg" alt="" />
        </div>
    <div class="">16-inch model</div>
    <div class="fw-bold"><h1>MacBook Pro</h1></div>
    <div><h1> best for the brightest</h1></div>
    <div class="links-wrapper">
      <ul class="list-unstyled list-inline">

        <Mainlink learnlink="/#/"learntext="Learn More"buylink="#"buytext="Buy"/>
      </ul>
    </div>
    <div><img src={laptop} alt=""/></div>
    </div>
    </section>
      </div>
    )
  }
}
