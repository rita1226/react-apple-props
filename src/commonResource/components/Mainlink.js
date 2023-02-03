import React, { Component } from 'react'

 class Mainlink extends Component {
  render() {
    return (
    <>
        <li class="list-inline-item"><a href={this.props.learnlink}>{this.props.learntext}</a></li>
        <li class="list-inline-item"><a href={this.props.buylink}>{this.props.buytext}</a></li>

      </>
    )
  }
}

export default Mainlink;
