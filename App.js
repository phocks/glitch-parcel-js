import React from "react"

export default class Welcome extends React.Component {
  render() {
    return <h2>Hello, {this.props.children}</h2>;
  }
}