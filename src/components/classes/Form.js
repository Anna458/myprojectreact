import React, { Component } from 'react'
import styles from './Form.module.css'

export class Form extends Component {

  state = {
    name: 'Text',
    count: 0
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleClick = (event) => {
    this.setState({ count: this.state.count + 1 })
  }

  render () {
    return (
      <>
        <h1 className={styles.border}>Первый урок</h1>
        <h2>Message: {this.state.name}</h2>
        <input type="text" onChange={this.handleChange} />
        <p className={styles.text}>Константа: {this.state.count}</p>
        <button onClick={this.handleClick}>Нажми на меня</button>
      </>
    )
  }
}