
import React,{Component}from 'react'
import Headerlink from './Headerlink'
import logo from "../../images/icons/logo-sm.png"
import search from "../../images/icons/search-icon-sm.png"
import cart from "../../images/icons/cart-sm.png"

 export default class Header extends Component {
  render (){
  return (
    <div>
      <div>
      <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
          </button>
          <a className="navbar-brand mx-auto" href="/"
            ><img src={logo}
          /></a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">

              <Headerlink linkurl="/mac/"linkname="mac"/>
              <Headerlink linkurl="/iphone/"linkname="iphone"/>
              <Headerlink linkurl="/watch/"linkname="watch"/>
              <Headerlink linkurl="/tv/"linkname="tv"/>
              <Headerlink linkurl="/Music/"linkname="Music"/>
              <Headerlink linkurl="/Support/"linkname="Support"/>
              

              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/"
                  ><img src={search}
                /></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/"
                  ><img src={cart}
                /></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    </div>
    </div>
  )
}
}





