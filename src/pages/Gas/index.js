import React, { Component } from "react"
import Example from "../../components/Example"
import html from "./index.html.js"

class Gas extends Component {
  render() {
    return <Example title="Gas" html={html} />
  }
}

export default Gas