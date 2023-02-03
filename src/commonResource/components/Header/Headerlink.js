import React, { Component } from 'react'

class Headerlink extends Component {
  render() {
    return (
      <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href={this.props.linkurl}>{this.props.linkname}</a>
              </li>
    )
  }
}
export default Headerlink;




              