import React, { Component } from 'react';
import '../App.css'

interface Props {
	showAll: () => void
  showCompleted: () => void
  showActive: () => void
}

export default class Navbar extends Component<Props> {
  constructor(props: Props) {
    super(props)
   }

  render() {
		const { showAll, showCompleted, showActive } = this.props
    return (
			<div className="navbar-container">
				<div onClick={() => showAll()} >Show All</div>	
				<div onClick={() => showCompleted()} >Show Completed</div>	
				<div onClick={() => showActive()} >Show Active</div>	
			</div>
    )
  }
}

