import React, { Component } from 'react'

 class Footerlink extends Component {
  render() {
    return (
      <>
        <h3>{this.props.linkTitle}</h3>
        <ul>{
          this.props.linkname.
          map((items, index) => (
          <li key={index}><a href={`/${items}`}>{items}</a></li>
            ))
      }
        </ul>
      
      </>
    )
  }
}
export default Footerlink;
